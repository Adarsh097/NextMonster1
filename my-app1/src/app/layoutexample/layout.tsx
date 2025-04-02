import Link from 'next/link'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children : ReactNode}) => {
  return (
    <div>
      <ul>
        <li>
            <Link href={`/layoutexample/signin`}>Login Main</Link>
        </li>
        <li>
            <Link href={`/layoutexample/signup`}>Register Main</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Layout
