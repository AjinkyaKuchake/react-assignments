import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/actions/Actions'
import { useForm } from 'react-hook-form'


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("data:", loginData);
        if (loginData.username === 'admin' && loginData.password === 'pass123') {
            dispatch(logIn(loginData.username));
            navigate("/home");
        }
        else {
            console.log("Something went wrong!!!!!!!!!!");
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <form onSubmit={handleLogin}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            //onClick={() => console.log("Login Submitted")}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? (Sign Up)"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login