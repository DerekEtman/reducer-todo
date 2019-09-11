import React, { useState, useReducer } from 'react';

export const ToDoTitle = () => {
    const [newTitle, setNewTitle] = useState();

    // const handleChanges = e => {
    //     setNewTitle(e.target.value);
    // }


    return(
        <>
        <h1>To.Do.</h1>
        </>
    )
}