import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logout from "@mui/icons-material/Logout";

const NavbarComponent = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="my-logo"
            size="large"
            edge="start"
            color="inherit"
          >
            <ConnectingAirportsIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INFLIGHT
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" variant="outlined" endIcon={<Logout/>}>Log Out</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarComponent;
