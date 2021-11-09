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
      {/* <img src="https://www.liveabout.com/thmb/tmL7B7IaqERxi2QihuV5LslsD5c=/1080x1080/smart/filters:no_upscale()/jeop_logo_large-58bacf375f9b58af5cb69e2f.jpg" alt="Jeopardy Log"/> */}
      <h1>Welcome to Jeopardy!</h1>
      <h2>Score: {score}</h2>
      <button onClick={decreaseScore}>Decrease</button>
      <button onClick={increaseScore}>Increase</button>
      <button onClick={resetScore}>Reset</button>




      
    </>
  );
}
export default Game