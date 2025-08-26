import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to go to Google'
// }


function MyApp() {
  return (
     <div>
        <h1>Custom App !</h1>
    </div>
  )
}


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const anotherUser = "chai aur react"

// Using React.createElement to create the same element as above
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
    reactElement
)
