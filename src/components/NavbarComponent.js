import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/Actions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="my-logo"
            size="large"
            edge="start"
            color="inherit"
            href="/"
          >
            <ConnectingAirportsIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INFLIGHT
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="/features">Features</Button>
            <Button color="inherit" href="/pricing">Pricing</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" variant="outlined" endIcon={<Logout />} href="/login">Log Out</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarComponent;
