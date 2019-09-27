import React, { Component } from 'react';
import './App.css';
import CircleSelector from "./components/CircleSelector/CircleSelector"
import Circles from "./components/Circles/Circles"

class App extends Component {

  constructor() {
    super();
    this.state= {
      selectedButton:1
    }
  }

  handleButtonSelection=(num)=> (
    this.setState({selectedButton:num})
  )


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector selectedButton={this.state.selectedButton} handleButtonSelection={this.handleButtonSelection}/>
          <Circles selectedButton={this.state.selectedButton}/>
        </main>
      </div>
    );
  }
}

export default App;