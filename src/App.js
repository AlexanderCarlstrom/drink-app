import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
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
        </header>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
}

export default App;
