import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = setter => event => {
        setter(event.target.value)
    };

    return (<div>
        <TextField required label="Login" variant="outlined" value={login} onChange={handleChange(setLogin)}/>
        <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handleChange(setPassword)}
        />
        <Button variant="contained" color="primary">
            login
        </Button>
    </div>)
}

export default LoginPage;