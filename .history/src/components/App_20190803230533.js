import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Demo from './demo';
import './App.scss';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Hello Word</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
} 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Demo} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}


export default App;
