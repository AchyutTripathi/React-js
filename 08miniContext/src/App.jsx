import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello, my name is Achyut Tripathi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
