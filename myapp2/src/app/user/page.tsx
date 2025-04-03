import { redirect } from 'next/navigation'
import React from 'react'

const User = () => {
    redirect("/about");
  return (
    <div>
      This is user page.
    </div>
  )
}

export default User
