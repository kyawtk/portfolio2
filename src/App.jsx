import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import OnlineCourse from './pages/OnlineCourse'
function App() {
 

  return (
    <Routes>
      <Route path='/' element={<OnlineCourse/>}></Route>
    </Routes>
  )
}

export default App
