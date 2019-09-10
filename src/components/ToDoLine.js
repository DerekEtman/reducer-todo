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
            <h3>{toDoState.toDo}</h3>
            
            {!state.editing ? (
                <>
                    <input 
                        className= "todo-edit"
                        onClick={() => dispatch({ type: "TOGGLE_EDITING"})}
                    />
                </>
            ) : (
                <>
                    <input className="todo-item" type="text" name="newToDo" value={newToDo} onChange={handleChanges} />

                    <button onClick= {() => { dispatch({type: "UPDATE_TODO", payload: {newToDo}}) }} > 
                        Edit?
                    </button>

                </>
            )}
        </>
    );
};