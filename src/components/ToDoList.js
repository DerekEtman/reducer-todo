import React from 'react';
// Components
import { ToDo } from '../components/ToDo.js';

export const ToDoList = (Arr) => {
    console.log(Arr);
    const toDoArr = Arr.data;

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