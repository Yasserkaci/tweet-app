import React from 'react'
import { useLogout } from '../hooks/useLogout'

const Home = () => {
    const {logout} = useLogout()
  return (
    <div onClick={logout}>Home</div>
  )
}

export default Home