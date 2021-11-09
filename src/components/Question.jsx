import "../index.css";
const Question = (props) => {
  const runFunctions = () => {
    props.hideAnswer();
    props.getQuestion();
  };

  return (
    <>
      <div>
        <button onClick={runFunctions}>Get Question</button>
      </div>
    </>
  );
};
export default Question;
