import React from 'react';


export const ToDo = (props) => {

    // const {title, completed, id} = props.item.item;
    // console.log("ToDo Destructure Title: ", props.item.item);

    return(
        <>
        <p>{props.data.item}</p>
        {/* <p>{props.item.completed}</p> */}
        </>
    )
}