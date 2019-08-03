import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Demo from './demo';
import './App.scss';

function Header() {
  const items = [
    {title: 'Hello Word', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'topis', path: '/topis'},
  ]
  return (
    <ul className="App-header">
      {
        items.map((item) =>  (
       <li className="App-header-li">
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))
      }
    </ul>
  );
} 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Demo} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
}


export default App;
