import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";

const App = () => (
    <Router>
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage/>
      </Route>
    </Switch>
    </Router>
)

export default App;
