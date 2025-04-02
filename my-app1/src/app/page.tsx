"use client";
import React from 'react'

import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();//! hooks work only in the client based component
  const navigate = (pageLogin : string)=>{
    router.push(`${pageLogin}`);
  }
  return (
    <div>
      This is home route
      <button className='block border py-2 px-3 rounded-full bg-blue-400 border-none mb-4 text-white shadow-md hover:shadow-lg cursor-pointer'
       onClick={()=>{navigate(`/login`)}}>Go to the Login Page</button>
       <button className='block border py-2 px-3 rounded-full bg-blue-400 mb-4 border-none text-white shadow-md hover:shadow-lg cursor-pointer'
       onClick={()=>{navigate(`/about`)}}>Go to the About Page</button>
       <button className='block border py-2 px-3 rounded-full bg-blue-400 mb-4 border-none text-white shadow-md hover:shadow-lg cursor-pointer'
       onClick={()=>{navigate(`/colors`)}}>Go to the Colors Page</button>
    </div>
  )
}

export default Home
