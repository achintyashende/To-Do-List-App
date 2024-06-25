// import React, { useState } from 'react'
// import { TodoForm } from './TodoForm'
// import { v4 as uuidv4 } from 'uuid';
// import { Todo } from './Todo';
// uuidv4();

// export const TodoWrapper = () => {

//     const [todos, setTodos] = useState([])

//     const addTodo = (todo) =>{
//         setTodos([...todos, {id: uuidv4(), task: todo,
//             completed: false, isEditing: false
//         }])
//         console.log(todos);
//     }

//     const toggleComplete = (id) =>{
//         setTodos(todos.map(todo=> todo.id === id ?{todo, completed: ! todo.completed }: todo))
//     }

//     return (
//         <div >
//             <div className=' p-5 px-8 mt-20 bg-amber-500 rounded-md '>
//                 <h1 className=' font-sans text-slate-900 font-extrabold text-4xl rounded-md items-center flex justify-center p-4 mb-6'>Get Things Done!</h1>
//                 <TodoForm addTodo={addTodo} />
//                 {todos.map((todo, index) =>(
//                     <Todo task={todo} key={index} toggleComplete={toggleComplete} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// // export default TodoWrapper
import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
        console.log(todos); // Check the updated state
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) =>{
        setTodos(todos.map(todo =>todo.id === id ?
            {...todo, task, isEditing : !todo.isEditing}:todo
        ))
    }

    return (
        <div>
            <div className='p-5 px-8 mt-20 bg-amber-500 rounded-md'>
                <h1 className='font-sans text-slate-900 font-extrabold text-4xl rounded-md items-center flex justify-center p-4 mb-6'>Get Things Done!</h1>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm
                        editTodo={editTask}
                        task={todo}
                        />
                    ):(
                    <Todo 
                    task={todo} 
                    key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo = {editTodo}
                    />
                    )
                ))}
            </div>
        </div>
    );
};
