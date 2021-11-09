import '../index.css'
import { useState } from 'react'
const Game = (props) => {
  
const [score, setScore]=useState(0)

  const increaseScore = () => {
    setScore(score + props.question[0].value)
  }
  
   const decreaseScore = () => {
     setScore(score - props.question[0].value);
   };
  
   const resetScore = () => {
     setScore(0);
   };


  return (
    <>
      
      <h1>Welcome to Jeopardy!</h1>
      <h2>Score: {score}</h2>
      <button onClick={decreaseScore}>Decrease</button>
      <button onClick={increaseScore}>Increase</button>
      <button onClick={resetScore}>Reset</button>

    </>
  );
}
export default Game