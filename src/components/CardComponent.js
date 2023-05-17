import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const CardComponent = () => {
  return (
    <>
      <Box width="300px">
        <Card>
          <CardMedia component="img" height="140" image="https://source.unsplash.com/random" alt="Flight Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My Trip
            </Typography>
            <Typography variant="body2" color="text.secondary">
              info about trips info about trips info about trips info about trips
              info about trips info about trips info about trips info about trips
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default CardComponent;
