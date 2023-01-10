import React, {Component} from 'react';
import './App.css';
import Person from './components/person.js';

class App extends Component{
  state = {
    persons: [
      {name: "Imran", age: "19"},
      {name: "Faizan", age: "18"},
      {name: "Sultan", age: "24"}
    ]
  }

  SwitchNameHandler = () =>{
    console.log('Clicked')
    this.setState({
      persons:[
        {name: "Sultan", age: "24"},
        {name: "Imran", age: "19"},
        {name: "Faizan", age: "18"}
      ]
    })
  }

  render(){
    return(
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick={this.SwitchNameHandler}>Switch</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    )
  }
}

export default App;
