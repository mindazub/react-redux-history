import React, {Component} from "react";
import "./App.css";

class App extends Component {
  state = {
    age: 43
  };

  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    })
  }

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    })
  }


  render() {
    return (
      <div className="App">
        <div>
    Age: <span>{this.state.age}</span>
        </div>
        <button onClick={this.onAgeUp}>UP</button>
        <button onClick={this.onAgeDown}>DOWN</button>
      </div>
    );
  }
}

export default App;
