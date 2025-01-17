import React, { useReducer } from 'react';

// Components
import { ToDo } from '../components/ToDo.js';

// reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';


export const ToDoList = () => {
    // console.log("ToDoList: ", arr)
    // console.log("ToDoList arr.data: ", arr.data);
    
    const [state, dispatch]  = useReducer(toDoReducer, toDoState);

    const initialState = state.data;
    console.log("initialState: ", initialState);
    // console.log("toDoList toggle: ", toggle);

    
    return(
        <>
            {state.data.map(arrData => (
                <ToDo 
                key={arrData.id}
                data={arrData}
                />
            ))}
        </>
    );
};