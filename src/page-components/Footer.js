import React from 'react'
import Logo from '../assets/logo.png'
function Footer() {
  return (
    <>
    <div id = "footer">
    <ul class = "list">
    <b><li>About</li></b><hr></hr>
    <li>Overview</li>
    <li>Why Proofpoint</li>
    <li>Careers</li>
    <li>Leadership Team</li>
    <li>News Center</li>
    <li>Nexus Platform</li>
    <li>Privacy and Trust</li>
    </ul>
    <ul class = "list">
    <b><li>Resources</li></b><hr></hr>
    <li>White Papers</li>
    <li>Webinar</li>
    <li>Data Sheets</li>
    <li>Events</li>
    <li>Customer Services</li>
    <li>Blog</li>
    </ul>
    <ul class = "list">
    <b><li>Resources</li></b><hr></hr>
    <li>White Papers</li>
    <li>Webinar</li>
    <li>Data Sheets</li>
    <li>Events</li>
    <li>Customer Services</li>
    <li>Blog</li>
    </ul>
    <list class = "contact-list">
    <li>Helpline No.<br/>
    011-273-186-011</li>
    <li>Mail us at <u>helpline@gmail.com</u></li>
    </list>
    </div>
    <div id = "footer-bottom">
    <img src = {Logo} alt = "logo" width="200px"></img>
    <h1>RECRUITMENT SOLUTION</h1>
    </div>
    </>
  )
}

export default Footer