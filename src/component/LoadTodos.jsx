import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../feature/todo/todoSlice'

const LoadTodos = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const loading = useSelector((state) => state.loading)
    // console.log(data);

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    return (
        <>
            {loading && <h1 className='text-2xl'>Loading</h1>}

            {
                data?.map((todo) => (
                    <div key={todo.id}>
                        {todo.id} : {todo.title}
                    </div>
                ))
            }
        </>
    )
}

export default LoadTodos