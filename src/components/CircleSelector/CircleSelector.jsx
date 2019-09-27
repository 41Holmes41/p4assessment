import React, { Component } from 'react';
import styles from './CircleSelector.module.css';


class CircleSelector extends Component {

determination=(num)=> {
  if (this.props.selectedButton === num) {
    return <div>Circle {this.props.selectedButton} selected</div>
  } else {
    return <button  onClick={()=>this.props.handleButtonSelection(num)}  number={num}> button {num}</button>
  }
}


  render() {
    return (
      <div className={styles.CircleSelector}>
        {this.determination(1)}
        {this.determination(2)}
        {this.determination(3)}
        {this.determination(4)}

      </div>
    );
  }
}

export default CircleSelector;