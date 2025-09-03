import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-sm transition-all duration-300 ${
        todo.completed
          ? "bg-green-100 border border-green-300"
          : "bg-purple-100 border border-purple-300"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-600 w-5 h-5"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`flex-1 bg-transparent outline-none text-lg ${
          isTodoEditable
            ? "border-b border-black/50 px-1"
            : "border-none"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        onClick={() => {
          if (todo.completed) return
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable((prev) => !prev)
          }
        }}
        disabled={todo.completed}
        className={`w-8 h-8 rounded-md text-sm flex justify-center items-center transition-all ${
          todo.completed
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-yellow-200 hover:bg-yellow-300"
        }`}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-8 h-8 rounded-md bg-red-200 hover:bg-red-300 text-sm flex justify-center items-center transition-all"
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
