import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Home from './components/home/Home'
import Game from './components/game/Game'
import Result from './components/result/Result'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Start the Game as Anonymous!</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/game">
            <Game/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
