import React, { useReducer, useState } from 'react';

// Styling
import './App.css';

// Reducers
import {toDoReducer, toDoState} from './reducers/defaultReducer';

// Components
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoLine } from './components/ToDoLine';
import { ToDoList } from './components/ToDoList';


function App() {
  const[toDoItem, setToDoItem] = useState();

  const [state, dispatch]  = useReducer(toDoReducer, toDoState);
  
  const addTodo = (item) =>dispatch({type:"ADD_TODO", input: item})
  
  console.log("TodoState: ", toDoState.data)

  return (
    <div className="App">
      <header className="App-header">

        <ToDoTitle />
        <ToDoLine addTodo={addTodo}/>
        <ToDoList data={toDoState.data}/>

      </header>
    </div>
  );
}

export default App;
