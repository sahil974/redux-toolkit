import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../feature/todo/todoSlice'


const AddTodo = () => {

    const [input, setInput] = useState('')
    const disptach = useDispatch()
    const todos = useSelector((state) => state.todos)
    const AddTodoHandler = (e) => {
        e.preventDefault()
        if (input === "")
            return
        // addtodo takes input and store it in action.payload
        disptach(addTodo(input))
        setInput('')
    }

    // console.log(todos);

    return (
        <div className='m-10' >


            <div>
                <h1 className='text-3xl'>Todos</h1>
                <ol>
                    {todos?.map((todo) => (
                        <li className='flex justify-between' key={todo.id}>
                            <div>
                                {todo.text}
                            </div>
                            <div>
                                <button onClick={() => { disptach(removeTodo(todo.id)) }}> delete</button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>


            <form onSubmit={AddTodoHandler} className='m-10'>
                <input type="text"
                    placeholder='enter your todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <br />
                <button type='submit'>
                    Add todo
                </button>
            </form>
        </div >
    )
}

export default AddTodo