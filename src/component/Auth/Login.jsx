import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)
        setemail("")
        setpassword("")
    }

  return (
    <div className='flex h-screen  items-center justify-center'>
      <div className='border-2 border-emerald-600 p-25 rounded-xl'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e) => {
                setemail(e.target.value)
            }}
             required className='border-2 border-emerald-600 py-3 px-6 text-xl text-white outline-none bg-transparent placeholder:text-gray-300 rounded-full' type="email" placeholder='Enter your email...' />

            <input value={password} onChange={(e) => {
                setpassword(e.target.value)
            }}
             required className='border-2 border-emerald-600 py-3 px-6 text-xl text-white outline-none bg-transparent placeholder:text-gray-300 mt-4 rounded-full'  type="password" placeholder='Enter password...' />

            <button className=' py-3 px-27.5 text-xl text-black outline-none bg-emerald-600 placeholder:text-gray-300 mt-6 rounded-full active:scale-95 cursor-pointer hover:bg-emerald-700'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
