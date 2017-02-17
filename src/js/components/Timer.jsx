import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
require("../../css/bootstrap.min.css");
class TimerInput extends Component {
     constructor(props) {
     super(props);
     this.state = {
         time: undefined,
         timeToCount:undefined,
        }
        this.handleTime = this.handleTime.bind(this);
        this.handleTimeToCount = this.handleTimeToCount.bind(this);

     }
     handleTime(e){
         let time = e.target.value;
         this.setState({
             time : time,
             timeToCount : time
         })
     }
     handleTimeToCount(e){
        e.preventDefault();
        this.props.startTimer(this.state.timeToCount);
        
     }
render(){
    return(
    <center>
         <div>
              <div>
                    <form  onSubmit={this.handleTimeToCount}> 
                        <input type="number"  value={this.state.time} onChange={this.handleTime}  placeholder="Enter Your time" autoFocus/>    
                        <input type="submit" value="Set Time"/>
                    </form>
             
              </div> 
         </div>
    </center>
);
    }
}
class TimerDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h4>{this.props.timeLeft}</h4>
            </div>
        )
    }
}
export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            timer:null,
            timeLeft:null,
        }
        
        this.startTimer = this.startTimer.bind(this);
 
    }
    startTimer(timeLeft){
        clearInterval(this.state.timer);
        let timer = setInterval(()=>{
             timeLeft = timeLeft - 1;
                if(timeLeft ==  0 || timeLeft < 0){
                    clearInterval(timer);
                    this.setState({timeLeft:"Your time is UP"})
                }else{
                    this.setState({
                    timeLeft : timeLeft
                    });}
         },1000)
         return  this.setState({
             timeLeft : timeLeft,
             timer:timer
         })
         
        
        }
    render(){
        return(
            <center>
            <div>
                <TimerDisplay timeLeft={this.state.timeLeft}></TimerDisplay>
                <TimerInput startTimer={this.startTimer}></TimerInput>
            </div>
            </center>
        )
    }
}
