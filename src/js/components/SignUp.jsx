import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
// import Nav from "../components/Nav.jsx";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],  
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
        
    
  }
handleUsername(e){
    let username = e.target.value;
    this.setState({
        username : username
    });
    console.log(username);

}
handleEmail(e){
    let email = e.target.value;
    this.setState({
        email : email
    });
    console.log(email);
}
handlePassword(e){
    let password = e.target.value;
    this.setState({
        password : password
    });
    console.log(password);
}
handleSubmit(e){
    e.preventDefault();
    function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
} 
     let username = this.state.username;
     let email = this.state.email;
     let password = this.state.password;
     let users = Array.from(this.state.users);
      if(username === "" || username.indexOf(" ") !== -1 && email === "" || email.indexOf(" ") !== -1 && password === "" || password.indexOf(" ") !== -1 ){
        alert("Enter Your credentials")
    }else{
     users.push(new User(username,email,password));
     this.setState({
         users:users
     });
     localStorage.setItem("users",JSON.stringify(users));
     console.log(users);}
      this.setState({
        username :"",
        email:"",
        password : ""
    });
}




  render() {
    return (
      <div>
          <center>
              <br/>
              <br/>
              <br/>
        <form action="POST" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="User Name" size="70"/>
            <input type="email" value={this.state.email} onChange={this.handleEmail} placeholder="User Email" size="70"/>
            <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="User Password" size="70"/>
            <input type="submit" value="     Submit    " />
        </form>
        </center>
      </div>
    );
  }
}
