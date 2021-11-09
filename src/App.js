import "./App.css";
import Game from "./components/Game";
import { useReducer, useState } from "react";
import Question from "./components/Question";
import ShowQuestion from "./components/ShowQuestion";

function App() {
  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    const response = await fetch(`https://jservice.io/api/random`);
    const data = await response.json();
    setQuestion(data);
  };

  const [qDis, setqDis] = useState("block");
  const [aDis, setaDis] = useState("none");

  const showAnswer = () => {
    setqDis("none");
    setaDis("block");
  };

  const hideAnswer = () => {
    setqDis("block");
    setaDis("none");
  };

  return (
    <div className="App">
      <Game question={question} />
      <Question getQuestion={getQuestion} hideAnswer={hideAnswer} />
      <ShowQuestion
        question={question}
        qDis={qDis}
        aDis={aDis}
        showAnswer={showAnswer}
        getQuestion={getQuestion}
        hideAnswer={hideAnswer}
      />
    </div>
  );
}

export default App;
