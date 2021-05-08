import React, { Component } from 'react';
import CounterList from './counter-task/CounterList';
import TaskList from './task-list-UI/TaskList';
import history from './history';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between" style={{ backgroundColor: "#4d5099" }}>
              <a className="navbar-brand" href="https://reactjs.org/">React Tasks</a>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item mr-5">
                  <Link to="/" className="nav-link">Counter</Link>
                </li>
                <li className="nav-item mr-5">
                  <Link to="/tasks" className="nav-link">Task-List</Link>
                </li>
                <li className="nav-item mr-5">
                  <Link to="/users" className="nav-link">User-List</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/tasks">
                <TaskList />
              </Route>
              {/* <Route path="/users">
                <User-List />
              </Route> */}
              <Route path="/">
                <CounterList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

}

