import React from 'react'

const Register = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 300, margin: '0 auto'}}>
      <input type="text" placeholder='email' />  
      <input type="text" placeholder='password' />  
      <input type="text" placeholder='repeat password' />  
    </div>
  )
}

export default Register;