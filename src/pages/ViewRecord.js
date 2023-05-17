import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { Box, Container, Grid } from "@mui/material";

const ViewRecord = () => {
    const { id } = useParams();
    return (
        <>
            <h3>Viewing Record of ID: {id}</h3>
            <Container maxWidth="lg">
                <Grid sx={{ justifyContent: "center", alignItems: "center", backgroundColor:"red"}} >
                    <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>
                    {/* #cfe8fc */}
                        <CardComponent />
                    </Box>
                </Grid>
            </Container>
        </>
    );
}

export default ViewRecord;