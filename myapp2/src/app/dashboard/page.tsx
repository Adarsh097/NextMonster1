import React from 'react'

const Dashboard = () => {
    if(2<5){
        throw new Error("Error: 2<5 in dashboard");
    }
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
