import React from 'react'

function Form() {
  return (
    <div id = "form-container">
    <h1 >Registration form</h1><br />
    <label for = "first-name">First Name </label><br />
    <input type = "text" class = "input" name = 'firstname'></input><br /><br />
    <label for = "last-name">Last Name </label><br />
    <input type = "text" class= 'input' name = 'lastname'></input><br /><br />
  <lable for = 'gender'>Gender </lable><br />
    <select class= 'input' name = "gender">Gender
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
    </select><br /><br />
    <label for = "age" >Age </label><br />
    <input type = "number" class= 'input age' name = 'age'></input><br /><br />
    <label for = "email">E-mail </label><br />
    <input type = "email" class= 'input' name = 'email'></input><br /><br />
    <label for = "contact">Password</label><br />
    <input type='password' class= 'input ' name = 'password'></input><br /><br />
    <a href='/register/submit'><button type='submit'>SUBMIT</button></a>
    </div>
  )
}

export default Form