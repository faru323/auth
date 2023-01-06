import React from 'react'

const Login = () => {
  return (
 
    <form className='loginForm'>
    <label className='login'>
      Name:
      <input type="text" name="name" className='inpLogin' />
    </label>
    <label  className='login aa'>
    Password:
    <input type="password" name="password" className='inpLogin' />
  </label>
    <input className='submitBtn' type="submit" value="Submit" />
  </form>
 
  )
}

export default Login