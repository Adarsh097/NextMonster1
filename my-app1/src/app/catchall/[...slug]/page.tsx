import React from 'react'

const WillCatch = async({params} : {params: {slug : string[]}}) => {
    const {slug} = await params;
    // console.log("................",slug);
  return (
    <div>
      This will catch all the routes.
      <h1>{slug}</h1>
      All Routes : {slug.map(p=>(
        <li key={p}>{p}</li>
      ))}
      
    </div>
  )
}

export default WillCatch
