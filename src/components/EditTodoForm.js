import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }

    return (
        <div>
            <form className=' my-8' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className=' p-2 rounded-md font-bold border-2 border-black'
                    value={value}
                    placeholder='Update Task'
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit' className=' bg-black font-semibold text-white p-2 rounded-md mx-2' >Update Task</button>
            </form>
        </div>
    )
}
