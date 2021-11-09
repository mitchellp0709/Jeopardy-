import { useState } from "react";
import "../index.css";
const ShowQuestion = (props) => {
  // const [qDis, setqDis] = useState("block");
  // const [aDis, setaDis] = useState("none");

  // const showAnswer = () => {
  //   setqDis("none");
  //   setaDis("block");
  // };

  if (props.question) {
    const runFunctions = () => {
      props.hideAnswer();
      props.getQuestion();
    };


    return (
      <div className="show-question">
        <div className="category">
          Category: {props.question[0].category.title}
        </div>
        <div className="points">Points: {props.question[0].value}</div>


        <div className="question" style={{ display: props.qDis }} onClick={props.showAnswer}>
          {props.question[0].question}
        </div>

        
        <div className="answer" style={{ display: props.aDis }} onClick={runFunctions}>
          Answer: {props.question[0].answer}
        </div>
      </div>
    );
  } else {
    return <p className="click">Click get question to begin!</p>;
  }
};
export default ShowQuestion;
