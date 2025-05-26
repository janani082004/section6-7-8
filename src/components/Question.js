
function Question({ question, selected, onSelect }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((ans, idx) => (
          <li
            key={idx}
            onClick={() => onSelect(ans.isCorrect)}
            style={{
              backgroundColor:
                selected === null
                  ? "#fff"
                  : ans.isCorrect
                    ? "lightgreen"
                    : "lightcoral",
              pointerEvents: selected !== null ? "none" : "auto",
              cursor: "pointer",
              margin: "8px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            {ans.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
