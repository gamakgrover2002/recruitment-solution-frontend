import React from 'react'
import Home from './page/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './page/Register';
import Submit from './page/Submit';
import Login from './page-components/Login';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path = '/' element= {<Home />}></Route>
    <Route path = '/register' element= {<Register />}></Route>
    <Route path = '/register/submit' element={<Submit />}></Route> 
    <Route path = "/login" element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App