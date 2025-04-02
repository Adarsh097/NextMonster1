import React from 'react'

const productCategory = async({params}:{params : {slug : string[]}}) => {
    const {slug} = await params;
  return (
    <div>
        {
            slug.map((p=>(
                <h1 className='font-bold text-blue-600' key={p}>{p}</h1>
            )))
        }
        <h1>{
            slug.join(", ")
            }</h1>
      
    </div>
  )
}

export default productCategory
