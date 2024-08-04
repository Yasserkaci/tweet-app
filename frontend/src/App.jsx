import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useContext'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useAuthContext()
  console.log(user)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user?<Home/>:<Navigate to='/login' />} />
          <Route path='/login' element={!user? <Login/> : <Navigate to='/' />} />
          <Route path='/register' element={!user?<Signup/> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
