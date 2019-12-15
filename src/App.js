import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";
import {CookiesProvider} from 'react-cookie';
import PrivateRoute from "./components/auth/PrivateRoute";

const App = () => (
    <CookiesProvider>
        <Router>
            <Route path="/login" exact component={LoginPage}/>
            <PrivateRoute path="/:page?" component={MainPage}/>
        </Router>
    </CookiesProvider>

)

export default App;
