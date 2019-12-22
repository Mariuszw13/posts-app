import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";
import {CookiesProvider} from 'react-cookie';
import PrivateRoute from "./components/auth/PrivateRoute";
import SinglePostPage from "./containers/SinglePostPage";
import Layout from "./components/Layout";

const App = () => (
    <CookiesProvider>
        <Router>
            <Switch>
                <Route path="/login" exact component={LoginPage}/>
                <Layout>
                    <PrivateRoute exact path="/:page?" component={MainPage}/>
                    <PrivateRoute exact path="/post/:id" component={SinglePostPage}/>
                </Layout>
            </Switch>
        </Router>
    </CookiesProvider>

)

export default App;
