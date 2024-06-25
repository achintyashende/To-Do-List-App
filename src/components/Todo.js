import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className=' flex mx-auto justify-between p-4 bg-slate-700 border-2 border-black shadow-xl font-semibold text-lg text-white mt-4 rounded-md'>
            <p 
            onClick={()=> toggleComplete(task.id)}
                className={`${task.completed ? 'completed' : ""}`}
            >
                {task.task}
            </p>
            <div className=' px-3'>
                <FontAwesomeIcon className=' mx-2' 
                icon={faPenToSquare}
                onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon 
                icon={faTrash}
                onClick={()=>deleteTodo(task.id)}
                />
            </div>
        </div>
    )
}

