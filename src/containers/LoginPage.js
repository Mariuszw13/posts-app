import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {tryLogin} from "../services";
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";


const LoginPage = (props) => {
    const [login, setLogin] = useState("appdev");
    const [password, setPassword] = useState("ih^ZWK06%Y");
    const [, setCookie] = useCookies(['authToken']);
    const history = useHistory();

    const handleChange = setter => event => {
        setter(event.target.value)
    };

    const onLoginSuccess = (token) => {
        setCookie("authToken", token, { path: '/' });
        history.push("/");
    };

    const onLoginClick = () => {
        tryLogin({username: login, password}, onLoginSuccess, () => null)
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
        <Button variant="contained" color="primary" onClick={onLoginClick}>
            login
        </Button>
    </div>)
}

export default LoginPage;