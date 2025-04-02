"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter();

    const previousPage = ()=>{
        router.back();

    }
  return (
    <div>
      This is about page
      <br />
      <button className='block border py-2 px-3 rounded-full bg-blue-400 mb-4 border-none text-white shadow-md hover:shadow-lg cursor-pointer'
       onClick={()=>{previousPage()}}>Go to the Previous Page</button>
    </div>
  )
}

export default About
