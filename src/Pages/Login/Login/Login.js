
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Login = (e) => {
    const [loginData, setLoginData] = useState({});
    const handleLoginSubmit = e => {
        alert('Hello')
        e.preventtDefault();
    }
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                        <NavLink
                            style={{textDecoration: 'none'}}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt=""/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
