import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from "@mui/material/TablePagination";
import Grid from "@mui/material/Grid";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import React, { useState, useEffect, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ApiCallRenderDataTable = () => {

    const ref = useRef();
    const [myData, setMyData] = useState([]);
    const [detailPage, setDetailPage] = useState(0);
    const [detailsPerPage, setDetailRecordsPerPage] = useState(10);
    const [totalPassengers, setTotalPassengers] = useState(0);
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.authReducer.username);

    const [editForm, setEditForm] = useState({
        name: "",
        trips: 0
    });

    const getDetails = async () => {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${detailPage}&size=${detailsPerPage}`)
        console.log("New Response", response);
        console.log("Actual response", response.data);
        console.log("Total Passengers", response.data.totalPassengers);
        console.log("Actual Data Details:", response.data.data);
        setTotalPassengers(response.data.totalPassengers);
        setMyData(response.data.data);
    };

    const handleChangeRowsPerPage = (event) => {
        setDetailRecordsPerPage(parseInt(event.target.value));
        setDetailPage(0);
    };

    const handleChangeDetailPage = (event, newPage) => {
        console.log("Event:", event);
        setDetailPage(newPage);
    };

    useEffect(() => {
        getDetails();
    }, [detailPage, detailsPerPage]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Update Clicked!!!");
    };

    const setDataToStorage = (name, trips) => {
        console.log("Name:", name);
        console.log("trips:", trips);
        setEditForm({
            name: name,
            trips: trips
        });
    };

    const handleEdit = (name, trips) => {
        console.log("Clicked!!!");
        console.log("Name:", name);
        console.log("trips:", trips);
        localStorage.setItem("Name", name);
        localStorage.setItem("Trips", trips);
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({
    //       ...values,
    //       [name]: value,
    //     });
    //   };

    return (
        <>
            <Container maxWidth="lg">
                <h2>Welcome {user}!!!</h2>
                <br />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
                <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead style={{ backgroundColor: '#cfe8fc' }}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Trips</TableCell>
                                <TableCell>Airline</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>Slogan</TableCell>
                                <TableCell>Website</TableCell>
                                <TableCell>Airline ID</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myData.map((item) => (
                                <TableRow
                                    key={item._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.trips}</TableCell>
                                    {item.airline.map((airlineItem, idx) => (<React.Fragment key={idx}>
                                        <TableCell>{airlineItem.name}</TableCell>
                                        <TableCell>{airlineItem.country}</TableCell>
                                        <TableCell>{airlineItem.slogan}</TableCell>
                                        <TableCell>{airlineItem.website}</TableCell>
                                        <TableCell>{airlineItem.id}</TableCell>
                                    </React.Fragment>
                                    )
                                    )}

                                    <TableCell>
                                        <IconButton aria-label="delete" color="error"><DeleteIcon fontSize="small" /></IconButton>
                                        <Link to={`/view-record/${item._id}`}>
                                            <IconButton aria-label="view" color="primary"><RemoveRedEyeIcon fontSize="small" /></IconButton>
                                        </Link>
                                        <Link to={`/edit/${item._id}`}>
                                            <IconButton aria-label="edit" color="info" onClick={() => { handleEdit(item.name, item.trips) }}><EditIcon fontSize="small" /></IconButton>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                        <Grid>
                            <Typography sx={{ fontSize: 13 }}>Page: {detailPage + 1}</Typography>
                        </Grid>
                        <Grid>
                            <TablePagination
                                sx={{ alignItems: "center" }}
                                rowsPerPageOptions={[5, 10, 15]}
                                count={totalPassengers}
                                rowsPerPage={detailsPerPage}
                                page={detailPage}
                                onPageChange={handleChangeDetailPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                showFirstButton
                                showLastButton
                            />
                        </Grid>
                    </Grid>
                </TableContainer>

                <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{
                    sx: {
                        backgroundColor: "#ffffff",
                        width: "300px",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                    },
                }}>
                    <Box sx={{ padding: 2, width: 250, textAlign: "center" }}>
                        <Typography variant="h6" component="div">Edit Record</Typography>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2} sx={{ px: 2, mb: 2 }}>
                                <Grid item={true} xs={12} md={12} lg={12}>
                                    <Box sx={{ mb: 1 }}>
                                        <TextField name="name" label="Name" fullWidth value={editForm.name} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ px: 2, mb: 2 }}>
                                <Grid item={true} xs={12} md={12} lg={12}>
                                    <Box sx={{ mb: 1 }}>
                                        <TextField name="trips" label="Trips" >{editForm.trips}</TextField>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ px: 2, mt: 5, mb: 3, textAlign: "left" }}>
                                <Button variant="contained" label="Save Changes" size="small" type="submit">Update</Button>
                                <Button variant="outlined" label="Cancel" size="small" sx={{ ml: 2, px: 3 }} onClick={() => setOpen(false)}>Cancel</Button>
                            </Box>
                        </form>
                    </Box>
                </Drawer>
                <br />
            </Container>
        </>
    );
};

export default ApiCallRenderDataTable;