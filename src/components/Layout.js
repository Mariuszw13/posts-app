import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {withCookies} from "react-cookie";

const Layout = ({className, children, cookies}) => {

    const logout = () => {
        const options = {
            path: "/"
        };
        cookies.remove("authToken", options);
    };

    return (
        <>
            <div className={className}>
                <CenterNavLink to="/1">Home</CenterNavLink>
                <h1>Web App</h1>
                <Button color="secondary" onClick={logout}>logout</Button>
            </div>
            {children}
        </>
    )
}

export default styled(withCookies(Layout))`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    background-color: #1E88E5;
    padding: 10px;
`;

const CenterNavLink = styled(NavLink)`
    align-self: center;
`