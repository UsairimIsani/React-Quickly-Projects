import React, {Component} from "react";
import ReactDOM from "react-dom";

require("../../css/bootstrap.min.css");

export default class Tooltip extends Component {
  constructor(props) {
    super(props)
    this.state = {
        opacity: false
    }
    this.toggleToolTip = this.toggleToolTip.bind(this)
  }
  toggleToolTip() {

    const {  offsetTop : top, offsetLeft: left  } = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top,
      left
    })
  }
  render() {
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 25,
      left: (this.state.left || 0) - 15

    }

    return (
      <div style={{display:"inline"}}>
        <span style={{color: "blue"}} onMouseEnter={this.toggleToolTip} onMouseOut={this.toggleToolTip}>
          {this.props.children}
        </span>
        <div className="tooltip tooltip-bottom" style={style} role="tooltip" data-animation="true">
          <div className="tooltip-arrow" data-animation="true"></div>
          <div className="tooltip-inner" data-animation="true">
            {this.props.text}
          </div>
        </div>
      </div>
    
    )
  }
}