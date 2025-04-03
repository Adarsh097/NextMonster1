import { redirect } from 'next/navigation'
import React from 'react'

const NotExisting = () => {
    redirect("/not-found");
  return (
    <div>
      this is not existing page
    </div>
  )
}

export default NotExisting
