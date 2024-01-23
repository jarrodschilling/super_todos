import { useState, useReducer } from "react";
import {ACTIONS} from './Form'



const ToDo = (props) => {

    const {todo, dispatch} = props

    return(
        <div>
            <span style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                {todo.name}
            </span>
            <input id="completedToDo" type="checkbox" onChange={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})}/>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id:todo.id}})}>Delete</button>
        </div>
    )
}

export default ToDo