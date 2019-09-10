import React, { useState, useReducer } from 'react';

// reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';

// Components
import { ToDo } from '../components/ToDo.js';

export const ToDoList = (Arr) => {
    const [newToDo, setNewToDo] = useState();

    const [state, dispatch] = useReducer(toDoReducer, toDoState);
    // console.log("ToDoLine State: ", state);
    const toDoArr = Arr.data;

    // console.log("ToDoArr: ",toDoArr);

    return(
        <>
            {toDoArr.map(arrData => (
                <ToDo 
                key={arrData.id}
                data={arrData}
                />
            ))}
        </>
    );
};