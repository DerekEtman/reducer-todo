import React, { useReducer} from 'react';

// reducers
import { toDoReducer, toDoState } from '../reducers/defaultReducer';


export const ToDo = (props) => {

    const [state, dispatch]  = useReducer(toDoReducer, toDoState);

    return(
        <div className="todo-list">
                <li>{props.data.item} <input type="checkbox" onClick={() => dispatch({type:"TOGGLE_TODO", input: props.data.id})} /></li>
        </div>
    )
}