import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, addTodo, updateTodo } from '../feature/todo/todoSlice';



const Todo = () => {
    const [isTodoEditable, setIsTodoEditable] = useState(null);
    const [updatedTodo, setUpdatedTodo] = useState("");
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem('todos'));
    //     // Check if there are todos in localStorage
    //     if (storedTodos && storedTodos.length > 0) {
    //         const todoValues = storedTodos.map(todo => todo.input);
    //         todoValues.forEach(todo => dispatch(addTodo(todo)));
    //     }
    // }, [dispatch]);

    const editTodo = (e) => {
        dispatch(updateTodo({ id: isTodoEditable, text: updatedTodo }));
        setUpdatedTodo('');
        setIsTodoEditable(null);
    }

    const updateHandler = (todo) => {
        if (isTodoEditable === todo.id) {
            editTodo();
        } else {
            setUpdatedTodo(todo.text);
            setIsTodoEditable(todo.id)
        }
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {isTodoEditable === todo.id ? (
                            <input type="text" className='text-white bg-zinc-800 border-black/10 px-2 outline-none' value={updatedTodo} onChange={(e) => setUpdatedTodo(e.target.value)} />
                        ) : (
                            <div className='text-white'>{todo.text}</div>)}

                        <button
                            onClick={() => updateHandler(todo)}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            {isTodoEditable ? "📁" : "✏️"}
                            {/* <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                /> */}

                        </button>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo