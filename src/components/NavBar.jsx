import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu, AccountCircle} from '@material-ui/icons'
import {Link} from 'react-router-dom'



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

                <IconButton color='inherit' aria-label='account'>
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
