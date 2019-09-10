import React, { useState, useReducer } from 'react';

// Reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';


export const ToDoTitle = () => {
    const [newTitle, setNewTitle] = useState();

    const [state, dispatch] = useReducer(toDoReducer, toDoState);

    const handleChanges = e => {
        setNewTitle(e.target.value);
    }


    return(
        <>
        <h1>To.Do.</h1>
        </>
    )
}