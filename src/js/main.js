import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Router, Route , IndexRoute ,browserHistory, Link} from "react-router";
require("../css/main.css");
require("../css/main.scss");
// require("../css/bootstrap.min.css");
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Excel from "./components/Excel.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Timer from "./components/Timer.jsx";
import Tooltip from "./components/Tooltip.jsx";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
     <div>
        <nav>
          <ul >
            <li>
              <Link to="/home" activeClassName="Active">Home</Link>
            </li>
            <li>
              <Link to="/excel" activeClassName="Active">Excel</Link>
            </li>
          <li>
              <Link to="/timer" activeClassName="Active">Timer</Link>
            </li>
            <li>
              <Link to="/signin" activeClassName="Active">Sign In</Link>
            </li>
            <li>
              <Link to="/signup" activeClassName="Active">Sign Up</Link>
            </li>
          </ul>
        </nav>
      <div id="tooltips">
        <div>
          <Tooltip text="This is an Example of Tooltip">Tooltips</Tooltip> are Part of UserInterface
        </div>
        
       </div>
       
       <div id="Container">
         {this.props.children}
       </div>
        
     </div>    
    );
  }

}
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={"/"} component={Main}>
    <IndexRoute path={"home"} component={Home}></IndexRoute>
      <Route path={"home"} component={Home}></Route>
      <Route path={"excel"} component={Excel}></Route>
      <Route path={"timer"} component={Timer}></Route>
      <Route path={"signin"} component={SignIn}></Route>
      <Route path={"signup"} component={SignUp}></Route>
    </Route>
  
  </Router>  
  ,
document.getElementById("root")
)
