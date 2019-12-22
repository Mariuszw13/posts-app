import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {tryLogin} from "../services";
import {useCookies} from 'react-cookie';
import {useHistory} from "react-router-dom";
import styled from "styled-components";


const LoginPage = ({className}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies(['authToken']);
    const history = useHistory();

    const handleChange = setter => event => {
        setter(event.target.value)
    };

    const onLoginSuccess = (token) => {
        setCookie("authToken", token, {path: '/'});
        history.push("/1");
    };

    const onLoginClick = () => {
        tryLogin({username: login, password}, onLoginSuccess, () => null)
    };

    return (
        <div className={className}>
            <TextField className="text-field" required label="Login" variant="outlined" value={login} onChange={handleChange(setLogin)}/>
            <TextField
                className="text-field"
                required
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={handleChange(setPassword)}
            />
            <Button className="login-button" variant="contained" color="primary" onClick={onLoginClick}>
                login
            </Button>
        </div>)
}

export default styled(LoginPage)`
    position: absolute;
    padding: 15px;
    border: 1px solid #A6A6A6;
    top: 30%;
    left: calc(50% - 15vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    
    .text-field {
        margin-bottom: 15px;
    }
`;