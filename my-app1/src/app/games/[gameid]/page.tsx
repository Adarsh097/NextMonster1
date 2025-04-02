import React from 'react'

const SpecificGame = async({params} : {params: {gameid : string}}  ) => {
  const {gameid} = await params;
//   console.log(params);
//   console.log(gameid);
    return (
    <div>
      {/* Game: {params.gameid} */}
      <br />
      Game : {gameid};
    </div>
  )
}

export default SpecificGame
