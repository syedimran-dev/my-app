import React, {useState} from 'react';
import './App.css';
import Person from './components/person.js';

const App = props => {
  const [personsState, setPersonState] = useState(
    {
      persons: [
        {name: "Imran", age: "19"},
        {name: "Faizan", age: "18"},
        {name: "Sultan", age: "24"}
      ]
    }
  )
  console.log(personsState)
  const SwitchNameHandler = () =>{
    console.log('Clicked')
    setPersonState({
      persons:[
        {name: "Sultan", age: "24"},
        {name: "Imran", age: "19"},
        {name: "Faizan", age: "18"}
      ]
    })
  }
    return(
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick={SwitchNameHandler}>Switch</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
    )
}

export default App;



