import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

    return (
        <div>
            <form className=' mb-10' onSubmit={handleSubmit}>
                <input 
                type='text' 
                className=' p-2 rounded-md font-bold border-2 border-black' 
                value={value}
                placeholder='what is task today ?' 
                onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit' className=' bg-black font-semibold text-white p-2 rounded-md mx-2' >Add Task</button>
            </form>
        </div>
    )
}
