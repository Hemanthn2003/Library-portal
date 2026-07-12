import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import LibraryStudents from '../src/Pages/LibraryStudents'
import Students from '../src/Pages/Students'
import Admin from '../src/Pages/Admin'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  
  return (
    <>
    <Header />
   <Routes>
<Route path='/' element={<Home />} />
<Route path='/active' element={<LibraryStudents />} />
<Route path='/students' element={<Students />} />
<Route path='/admin' element={<Admin />} />
   </Routes>
    

    <Footer />
    </>
  )
}

export default App
