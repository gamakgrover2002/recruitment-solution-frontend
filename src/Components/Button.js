import React from 'react'


function Button(props) {
  return (
    <div id = "button-container">
    <span><a href = '/login'> <button className='header-button'>{props.button1} </button></a>
 <a href='/register'><button className='header-button'>{props.button2} </button></a></span>
    </div>
  )
}

export default Button