import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Drink from './components/Drink/Drink';
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <AppBar color="primary" position="static" className="header">
          <Toolbar>
            <ul className="menu">
              <li className="menu-item">
                <NavLink exact to="/" activeClassName="active" className="menu-link">
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink exact to="/explore" activeClassName="active" className="menu-link">
                  Explore
                </NavLink>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/drink/:id" component={Drink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
