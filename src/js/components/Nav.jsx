import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Router, Route , browserHistory, Link} from "react-router";


export default class Nav extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
     <div>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="Active">Home</Link>
            </li>
            <li>
              <Link to="/excel" activeClassName="Active">Excel</Link>
            </li>
            <li>
              <Link to="/signup" activeClassName="Active">Sign Up</Link>
            </li>
          </ul>
        </nav>
     </div>    
    );
  }

}