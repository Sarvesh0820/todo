import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id:1,
        todo: "Todo msg",
        checked: false,
    }],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (todo, id) => {},
    toggleTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider