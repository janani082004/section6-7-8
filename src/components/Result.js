
function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Completed ✅</h2>
      <p>
        Your Score: {score} / {total}
      </p>
      <p>{score === total ? "🎉 Perfect!" : "💪 Good Try!"}</p>
    </div>
  );
}

export default Result;
