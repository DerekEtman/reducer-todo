import React, { useReducer, useState } from 'react';

// Styling
import './App.css';

// Reducers
import {toDoReducer, toDoState} from './reducers/defaultReducer';

// Components
import { ToDoTitle } from './components/ToDoTitle.js';
import { ToDoLine } from './components/ToDoLine.js';


function App() {
  const[toDoItem, setToDoItem] = useState();

  const [state, dispatch]  = useReducer(toDoReducer, toDoState);


  return (
    <div className="App">
      <header className="App-header">

        <ToDoTitle />

        <ToDoLine />

      </header>
    </div>
  );
}

export default App;
