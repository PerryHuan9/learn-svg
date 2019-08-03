import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
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
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}


export default App;
