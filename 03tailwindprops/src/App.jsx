import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Achyut Tripathi",
    age: 21
  }

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card userName="Achyut Tripathi" someObj={myobj} someArr={newArr}/>
     <Card userName="America"/>
    </>
  )
}

export default App


// Summary: This code defines a React functional component named App that uses the useState hook to manage a count state variable. It also defines an object and an array, which are passed as props to the Card component along with different userName values. The App component renders a heading and two Card components, demonstrating how to pass props in React.And it imports the Card component from a separate file.
