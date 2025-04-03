
import React from 'react'

const About = async() => {
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("content loading...");
        }, 4000);
    })
  return (
    <div>
      This is about page.
    </div>
  )
}

export default About
