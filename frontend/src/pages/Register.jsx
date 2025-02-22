import React from 'react'
import LoginLeft from '../components/Login/LoginLeft/LoginLeft.jsx'
import LoginRight from '../components/Login/LoginRight/LoginRight.jsx'
import RegisterLeft from '../components/Register/RegisterLeft.jsx'

export default function Register() {
  return (
    <div className='login-container' style={{display: 'flex', overflow: 'hidden'}}>
        <RegisterLeft />
        <LoginRight />
    </div>
  )
}
