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
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const ApiCallRenderDataTable = () => {

    const [myData, setMyData] = useState([]);
    const [detailPage, setDetailPage] = useState(0);
    const [detailsPerPage, setDetailRecordsPerPage] = useState(10);
    const [totalPassengers, setTotalPassengers] = useState(0);

    const getDetails = async () => {
        const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${detailPage}&size=${detailsPerPage}`)
        console.log("New Response", response);
        console.log("Actual response", response.data);
        console.log("Total Passengers", response.data.totalPassengers);
        console.log("Actual Data Details:", response.data.data);
        setTotalPassengers(response.data.totalPassengers);
        setMyData(response.data.data);
    };

    const handleChangeDetailPage = (event, newPage) => {
        setDetailPage(newPage);
    };

    useEffect(() => {
        getDetails();
    }, [detailPage]);

    return (
        <>
            <Container maxWidth="lg">
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
                                    {item.airline.map((airlineItem, idx) => (<>
                                        <TableCell>{airlineItem.name}</TableCell>
                                        <TableCell>{airlineItem.country}</TableCell>
                                        <TableCell>{airlineItem.slogan}</TableCell>
                                        <TableCell>{airlineItem.website}</TableCell>
                                    </>
                                    )
                                    )}

                                    <TableCell>
                                        <IconButton aria-label="delete" color="error"><DeleteIcon fontSize="small" /></IconButton>
                                        <IconButton aria-label="view" color="primary"><RemoveRedEyeIcon fontSize="small" /></IconButton>
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
                                rowsPerPageOptions={[10]}
                                count={totalPassengers}
                                rowsPerPage={detailsPerPage}
                                page={detailPage}
                                onPageChange={handleChangeDetailPage}
                            />
                        </Grid>
                    </Grid>
                </TableContainer>
                <br />
            </Container>
        </>
    );
};

export default ApiCallRenderDataTable;