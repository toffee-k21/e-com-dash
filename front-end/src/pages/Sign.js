import React, { useState } from 'react'

const Sign = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


  const  handleSign = ( )=>{
        console.log(name,email,password)
    }

  return (
    <div className='m-auto w-1/2 bg-gray-100 my-10'>
        <h1 className='text-xl font-semibold m-7'>Sign Up</h1>
        <div>
            <input name="name" onChange={(e)=>setName(e.target.value)} className='border-[1px] border-black p-1 m-7 block' type="text"/>
            <input name="email" onChange={(e)=>setEmail(e.target.value)} className='p-1 m-7 block' type="email"/>
            <input name="password" onChange={(e)=>setPassword(e.target.value)}className='p-1 m-7 block' type="password"/>
            <button onClick={handleSign} className='bg-black text-white p-1 m-7 '>Sign Up</button>
        </div>
    </div>
  )
}

export default Sign