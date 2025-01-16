import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Lobby from '../pages/Lobby'

const AllRoute = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />

    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/lobby" element={<Lobby/>} />


   </Routes>
  )
}

export default AllRoute