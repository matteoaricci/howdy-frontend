import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu, AccountCircle} from '@material-ui/icons'
import {Link} from 'react-router-dom'


const logout = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/users/sign_out'
    
    , {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ data: JSON.parse(localStorage.getItem('user'))})
    }
    
    )
    .then(res => res.json())
    .then(resp => console.log(resp))
}

const NavBar = () => {

    return (
        <AppBar position='static'>
            <Toolbar style={{background: 'linear-gradient(to bottom right, #522d5b, #d7385e)'}}>
                <IconButton color='inherit' edge='start' aria-label='menu'>
                    <Menu />
                </IconButton>

                <Typography variant='h6' style={{flexGrow: 1, textAlign: 'left'}}>
                    HOWDY
                </Typography>

                <Button color='inherit'>
                    Login
                </Button>

                <Button color='inherit'>
                    Register
                </Button>

                <Button onClick={(event) => logout(event)} color='inherit'>
                    Logout
                </Button>

                <IconButton color='inherit' aria-label='account'>
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
