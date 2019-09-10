import React, { useState, useReducer } from 'react';

// reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';


export const ToDoLine = () => {
    const [newToDo, setNewToDo] = useState();

    const [state, dispatch] = useReducer(toDoReducer, toDoState);
    console.log("ToDoLine State: ", state);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };

    return(
        <>
            <div className="todo-add-wrapper">
                <input className="todo-add-input" type="text" name="newToDo" value={newToDo} onChange={handleChanges}/>
                <button className="todo-add" onClick={() => dispatch({ type: "TODO_ADD"})}>Add ToDo</button>
            </div>
        </>
    );
};





// editing TODO

            {/* {!state.editing ? (
                <>
                    <h2>
                        {state.item}
                        <i
                            className= "todo-edit"
                            onClick={() => dispatch({ type: "TOGGLE_EDITING"})}
                        />
                    </h2>
                </>
            ) : (
                <>
                    <input className="todo-item" type="text" name="newToDo" value={newToDo} onChange={handleChanges} />

                    <button onClick= {() => { dispatch({type: "UPDATE_TODO", payload: {newToDo}}) }} > 
                        Edit?
                    </button>

                </>
            )} */}