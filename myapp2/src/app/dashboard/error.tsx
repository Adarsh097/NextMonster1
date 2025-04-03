"use client"
import React from 'react'

const ErrorBoundary = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <p className='text-5xl text-red-900 animate-bounce'>Error in Dashboard</p>
    </div>
  )
}

export default ErrorBoundary
