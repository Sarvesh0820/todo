import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (todo, id) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id
      === id ? todo : prevTodo)))
  }

  const removeTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggleTodo = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id
  === id? {...prevTodo, checked: !prevTodo.checked} :prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoos"))

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="container max-w-2xl mx-auto shadow-md rounded-lg p-4 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


export default App
