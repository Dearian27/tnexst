import React from 'react'

const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 300, margin: '0 auto'}}>
      <input type="text" placeholder='email' />  
      <input type="text" placeholder='password' />  
    </div>
  )
}

export default Login