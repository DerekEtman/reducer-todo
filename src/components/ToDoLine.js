import React, { useState, useReducer } from 'react';

// reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';


export const ToDoLine = () => {
    // console.log("dispatch.add ", dispatch.add);
    const [newToDo, setNewToDo] = useState();
    const [state, dispatch]  = useReducer(toDoReducer, toDoState);

    console.log("ToDoLine State: ", newToDo);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };
    // console.log("handelChanges: ", handleChanges)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:"ADD_TODO", payload:{newToDo}});
    }

    return(
    <>
        <div className="todo-add-wrapper">
            <form onSubmit={handleSubmit}>
            <input 
            className="todo-add-input" type="text" 
            name="newToDo" 
            value={newToDo} onChange={handleChanges}/>

            <button 
            className="todo-add" 
            onClick={handleSubmit}>
                +
            </button>

            <button 
            className="todo-clear"
            onClick={() => dispatch({type:"REMOVE_ALL"})}
            >
            Remove All
            </button>
            </form>
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