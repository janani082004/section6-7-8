import { useState, useEffect } from "react";
import { questions } from "./data";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (time === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTime((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const handleSelect = (isCorrect) => {
    setSelected(isCorrect);
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setTime(10);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <div className="quiz-box">
          <h2>Time Left: {time}s</h2>
          <Question
            question={currentQuestion}
            selected={selected}
            onSelect={handleSelect}
          />
          <button onClick={handleNext} disabled={selected === null}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
