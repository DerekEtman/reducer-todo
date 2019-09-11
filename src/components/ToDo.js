import React from 'react';


export const ToDo = (props) => {

    // const {title, completed, id} = props.item.item;
    // console.log("ToDo Destructure Title: ", props.item.item);

    return(
        <ul className="todo-list">
        <li>{props.data.item}</li>
        {/* <p>{props.item.completed}</p> */}
        </ul>
    )
}