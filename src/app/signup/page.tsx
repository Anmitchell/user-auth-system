'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  })

  const [ showButton, setShowButton ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      toast('Sign up successful.')

    } catch (error: any) {
      console.log(error)
      toast.error("Signup failed", error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  }, [user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-teal-400'>
      <div className='flex flex-col items-center justify-center bg-gray-800 p-5 rounded-sm text-white w-1/5'>

        <h1 className='text-4xl mb-2'>{loading ? "Processing": "Create Account"}</h1>
        <hr />
        {/* USERNAME */}
        <label htmlFor='username'>username</label>
        <input
          className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          id='username'
          type='text'
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value })
          }}
          placeholder='username'
        ></input>

        {/* EMAIL */}
        <label htmlFor='email'>email</label>
        <input
          className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
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
          className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          id='password'
          type='password'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
          placeholder='password'
        ></input>

        {/* Sign up Button */}
        <button
          className='p-2 border-gray-800 bg-teal-400 rounded-lg mb-4 focus:outline-white focus:border-white active:bg-gray-500 w-2/3 hover:brightness-150'
          onClick={onSignup}
        > Create Account
        </button>
        <Toaster />
        <Link href='/login'>
          <p className='text-sm'>
        Already have an account? <span className='text-lg text-teal-400 font-bold hover:text-white'>LOGIN</span>
          </p></Link>
      </div>
    </div>
  )
}
