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

const RenderDataTable = () => {

    const apiUrl = "https://api.instantwebtools.net/v1/passenger?page=0&size=1667";

    const [myData, setMyData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            if (response.status === 200) {
                setMyData(response.data.data);
            } else {
                setMyData(null);
            }
        });
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const slicedData = myData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    console.log("My Data:", myData);

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
                            {slicedData.map((item) => (
                                <TableRow
                                    key={item._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell className="table-cell">{item.name}</TableCell>
                                    <TableCell className="table-cell">{item.trips}</TableCell>
                                    {item.airline.map((airlineItem, idx) => (<>
                                        <TableCell className="table-cell">{airlineItem.name}</TableCell>
                                        <TableCell className="table-cell">{airlineItem.country}</TableCell>
                                        <TableCell className="table-cell">{airlineItem.slogan}</TableCell>
                                        <TableCell className="table-cell">{airlineItem.website}</TableCell>
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
                    <Stack direction="row" justifyContent="end">
                        <TablePagination
                            sx={{ alignItems: "center" }}
                            rowsPerPageOptions={[5, 10, 15]}
                            count={myData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Stack>
                </TableContainer>
            </Container>
        </>
    );
};

export default RenderDataTable;