import React, {useState} from 'react';
import {TextField, Grid, Button} from '@material-ui/core'

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    const submitLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    login,
                    password
                }
            })
        })
        .then(resp => resp.json())
        .then(res => console.log(!!res.error))
    }

    return (
        <div>
            <form onSubmit={event => submitLogin(event)}>
                <Grid style={{marginTop: '2em'}} container direction={'column'} spacing={3} width='75%'>
                    <Grid item xs={12}>
                        <TextField 
                        value={login}
                        onChange={event => setLogin(event.target.value)}
                        variant='outlined'
                        required
                        fullWidth
                        id='userName'
                        label="Username or Email"
                        name='userName'
                        autoComplete='uname'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                </Grid>
                <Button type='submit'>Login</Button>
            </form>
            
        </div>
    );
}

export default Login;
