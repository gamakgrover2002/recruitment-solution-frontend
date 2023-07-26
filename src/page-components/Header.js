import React from 'react'
import Photo from '../assets/logo.png'
import Button from '../Components/Button'
function Header() {
  return (
    <div class = "container1">
    <div id = "img-container">
    <img id = "logo-img" src = {Photo} alt = "logo" width= "70px" height="60px"></img>
    <p>Recruitment Solution</p>
    </div>
    <ul id = "header-items">
    <li>Home</li>
    <li>About</li>
    <li>Know More</li>
    <li>Contact</li>
    <li>Know More</li>
    </ul>
    <Button button1 = "LogIn" button2 = "SignUp"/>
    </div>
  )
}

export default Header