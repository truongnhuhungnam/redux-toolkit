import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Todo 1",
        completed: true,
    },
    {
        id: 2,
        name: "Todo 2",
        completed: true,
    },
    {
        id: 3,
        name: "Todo 3",
        completed: false,
    },
];

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleCompleted: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            if (currentTodo) currentTodo.completed = !currentTodo.completed;
        },
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const currentTodo = state.find((todo) => todo.id === id);
            if (currentTodo) {
                currentTodo.name = name;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleCompleted, updateTodo, removeTodo } =
    todosSlice.actions;

export default todosSlice.reducer;
