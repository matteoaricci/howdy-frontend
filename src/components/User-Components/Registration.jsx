import React, {useState} from 'react';
import {TextField, Grid, Button} from '@material-ui/core'

const Registration = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    email: email
                }
            })
        })
        .then(resp => resp.json())
        .then(reg => console.log(reg))
    }

    return (
    <div>
        <form onSubmit={event => submitForm(event)}>
            <Grid style={{marginTop: '2em'}}container direction={'column'} spacing={3} width='75%'>
                <Grid item xs={12}>
                    <TextField
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Username"
                    name="userName"
                    autoComplete="uname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
            <Button type='submit'>Submit</Button>
        </form>
    </div>
    );
}

export default Registration;
