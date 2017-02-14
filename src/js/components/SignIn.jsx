import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link, browserHistory} from "react-router";
require("../../css/bootstrap.min.css");


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : JSON.parse(localStorage.getItem("users")),  
      usernameOrEmail: "",
      password: "",
      CurrentUser : ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameNEmail = this.handleUsernameNEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
handleUsernameNEmail(e){
    let usernameOrEmail = e.target.value;
    this.setState({
        usernameOrEmail : usernameOrEmail
    });

}

handlePassword(e){
    let password = e.target.value;
    this.setState({
        password : password
    });
}
handleSubmit(e){
    e.preventDefault();
    let users =Array.from(this.state.users);
    for(let i = 0 ;i < users.length;i++ ){
        if(users[i].username === this.state.usernameOrEmail || users[i].email === this.state.usernameOrEmail && users[i].password === this.state.password){
            this.setState({
                CurrentUser : this.state.usernameOrEmail
            });
            alert(`You're Signed In As ${this.state.CurrentUser}`);
            console.log(this.state.CurrentUser);
            browserHistory.push('/home');
            break;
        }else{
            alert("Please Sign Up First");
            browserHistory.push('/signup');
            break;
        }

    } 
    
}




  render() {
    return (
      <div>
          <center>
              <br/>
              <br/>
              <br/>
        <form action="POST" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.usernameOrEmail} onChange={this.handleUsernameNEmail} placeholder="Name Or Email" size="70"/>
            <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password" size="70"/>
            <input type="submit" value="     Submit    " />
        </form>
        </center>
      </div>
    );
  }
}
