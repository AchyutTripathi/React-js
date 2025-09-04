import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h3 className="text-3xl font-bold text-center text-sky-600 dark:text-sky-400 mb-6 tracking-wide">
      Write Down What Matters
      </h3>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
