import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu, AccountCircle} from '@material-ui/icons'
import {Redirect, useHistory, useLocation} from 'react-router-dom'

const NavBar = () => {
    const history = useHistory();

    const logout = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users/sign_out',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            }
            ,
            body: JSON.stringify({ 
                jwt: localStorage.getItem('token')
            })
        })
        .then(res => res.json())
        .then(resp => {
            localStorage.removeItem('token');
            localStorage.setItem('status', resp)
            history.push('/login')
        })
    }

    return (
        <AppBar position='static'>
            <Toolbar style={{background: 'linear-gradient(to bottom right, #522d5b, #d7385e)'}}>
                <IconButton color='inherit' edge='start' aria-label='menu'>
                    <Menu />
                </IconButton>

                <Typography variant='h6' style={{flexGrow: 1, textAlign: 'left'}}>
                    HOWDY
                </Typography>
                {
                    !localStorage.getItem('token') ? 
                    <div>

                <Button color='inherit'>
                    Login
                </Button>

                <Button color='inherit'>
                    Register
                </Button>
                    </div>
:
                <Button onClick={(event) => logout(event)} color='inherit'>
                    Logout
                </Button>
}

                <IconButton color='inherit' aria-label='account'>
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
