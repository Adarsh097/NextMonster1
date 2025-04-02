import React from 'react'
interface userInterface{
    params : {
        id : number
    }
}
const profile = async({params} : userInterface) => {
    const {id} = await params;
  return (
    <div>
      User Profile: {id}
    </div>
  )
} 

export default profile
