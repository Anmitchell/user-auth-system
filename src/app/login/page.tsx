'use client'
import Link from 'next/link'
import { useState } from 'react'
//import { useRouter } from 'next/navigation'
//import { axios } from 'axios'

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const onLogin = async () => {}

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-teal-400'>
      <div className='flex flex-col items-center justify-center bg-gray-800 p-5 rounded-sm'>
        <h1 className='text-4xl mb-2'>Login</h1>
        <hr />

        {/* EMAIL */}
        <label htmlFor='email'>email</label>
        <input
          className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 pl-3'
          id='email'
          type='text'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }}
          placeholder='email'
        ></input>

        {/* PASSWORD */}
        <label htmlFor='password'>password</label>
        <input
          className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
          id='password'
          type='text'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
          placeholder='password'
        ></input>

        <button
          className='p-2 border-gray-800 bg-teal-400 rounded-lg mb-4 focus:outline-white focus:border-white active:bg-gray-500 w-2/3'
          onClick={onLogin}
        >
          Login
        </button>
        <Link href='/signup'>Visit Signup page</Link>
      </div>
    </div>
  )
}
