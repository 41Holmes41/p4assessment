import React, { Component } from 'react';
import './Circle.css';




class Circles extends Component {


  render() {
    return (
      <div className="Circles">
        <div className={this.props.selectedButton === 1 ? "selected" : ""}>1</div>
        <div className={this.props.selectedButton === 2 ? "selected" : ""}>2</div>
        <div className={this.props.selectedButton === 3 ? "selected" : ""}>3</div>
        <div className={this.props.selectedButton === 4 ? "selected" : ""}>4</div>
      </div>
    );
  }
}

export default Circles;