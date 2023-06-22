import ChessBoard from "chessboardjsx";
import React, {useState} from "react";
import { Chess } from "chess.js";
import './App'
 
function App() {
  const[fen , setFen] = useState("start");
  const[game , setGame] = useState(new Chess());
  
  const container={
    marginTop:"2rem",
    display:"flex",
    justifyContent : "space-around"
  }
  
  const HandleDrop = ({sourceSquare , targetSquare}) => {
    let valid = game.move({
      from : sourceSquare,
      to : targetSquare
    })
    if(valid){
    setFen(game.fen())
    }
  }

  const HandleClick = () => {
    setFen("start")
  }
  
  
  return (
    <>
    {game && game.game_over() ? <div> <p style={{textAlign : "center", backgroundColor: "#ca9799"}}>GameOver and u probably lost u dumb fuck</p> <button style={{ justifyContent : "center", display: "flex", marginLeft :700}} onClick={HandleClick}>play again</button> </div>  : null }
    
    <div style={container}>
      <ChessBoard position={fen} onDrop={HandleDrop} />
    </div>
   </>
  );
}

export default App;
