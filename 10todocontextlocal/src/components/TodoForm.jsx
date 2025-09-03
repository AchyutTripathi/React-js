import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex w-full">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full bg-white/30 placeholder-white text-white px-4 py-2 rounded-l-md outline-none focus:bg-white/40 duration-150"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-all"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
