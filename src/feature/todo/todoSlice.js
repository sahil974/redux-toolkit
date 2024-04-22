import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello" }, { id: 2, text: "hii" }],
    data: null,
    loading: false,
    isError: false,
}

// Actions
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

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
    },
    // for using AsyncThunk
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            // data from fetchTodos is carried by action.payload
            state.data = action.payload?.slice(0, 10)
            state.loading = false
        })

        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("fetchTodos is rejected ", action.payload);
            state.isError = true
        })
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer