

import React from 'react'
import Button from './Button'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center relative z-1000'>
      <div className="z-100 p-10 border border-cyan-500/30 rounded-xl bg-black/20 backdrop-blur-lg">
        <h1 className='text-center text-cyan-500 font-bold mb-10 text-4xl'>Login</h1>
        <form className='flex flex-col gap-5    z-100' action="">
          <h1 className='text-white  text-lg'>Email</h1>
          <input className='text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30' type="email" />
          <h1 className='text-white  text-lg'>Password</h1>

          <input className='text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30' type="password" />
          <div className="flex items-center justify-center w-full h-1/2">
            <Button  text='Login' textSize='text-2xl' iconLink={<i className="ri-login-box-line text-3xl"></i>} />
            
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login
