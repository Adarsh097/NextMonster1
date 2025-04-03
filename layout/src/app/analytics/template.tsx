"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Layout = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <input className='border focus-within:bg-amber-200' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <Link className='rounded-full p-2 border border-none  hover:shadow-md hover:shadow-green-200 bg-green-500' href={`/analytics/revenue`}>Revenue</Link>
        <br />
        <br />
        <Link className='rounded-full p-2 border border-none  hover:shadow-md hover:shadow-green-200 bg-green-500'  href={`/analytics/stats`}>Stats</Link>
      
    </div>
  )
}

export default Layout
