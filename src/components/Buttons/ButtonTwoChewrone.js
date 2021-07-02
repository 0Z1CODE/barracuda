import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {NavLink, Router} from 'react-router-dom'
// import './button.scss'
class ButtonTwoChewrone extends Component {
  state = {  }
  render() { 
    return ( 
      <>
     <button className="twoChewrone">{this.props.text}</button>
      </>
     );
  }
}
 
export default ButtonTwoChewrone;