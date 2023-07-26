import React from 'react'
import Header from './Header'

function Login() {
  return (
    <div id = "login-container">
    <Header />
    <center><u>LOGIN</u></center>
    <div id = "login">

    <div id = "login-img-container"></div>
   <div id = "login-form">
    E-mail<br />
    <input type = "text" required  placeholder='email'/><br /><br />
    Password<br />
    <input type = 'text' required placeholder='password' /><br /><br />
    <a href = '/'><button id = "login-button">Log In</button></a>
    </div>
   
    </div>
  
    </div>
  )
}

export default Login