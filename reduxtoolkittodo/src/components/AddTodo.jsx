// import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {addTodo} from '../features/todo/todoSlice' 

// function AddTodo() {

//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()

//     const addTodoHandler = (e) => {
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')
//     }

//   return (
//     <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//       <input
//         type="text"
//         className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         placeholder="Enter a Todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//     </form>
//   )
// }

// export default AddTodo






























import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full max-w-2xl mx-auto mt-10 flex items-center gap-4"
    >
      <input
        type="text"
        className="flex-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition-all"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
