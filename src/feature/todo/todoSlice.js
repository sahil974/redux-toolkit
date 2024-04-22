import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello" }, { id: 2, text: "hii" }],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            // assumed that id is passed as payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer