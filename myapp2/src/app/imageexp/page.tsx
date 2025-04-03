import React from 'react'
import mushroom from "../../../public/mushroom.png"
import Image from 'next/image'

const ImageExp = () => {
  return (
    <div>
        <Image
        src={mushroom} alt='mushroom'
         
        />
        <Image 
        src="https://images.unsplash.com/photo-1740529673436-aa890905bcfe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt='external image'
        width={400}
        height={400}/>
      
    </div>
  )
}

export default ImageExp
