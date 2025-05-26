import React, { useReducer } from "react";

// 1. Initial State
const initialState = {
  count: 0,
  text: "Initial",
};

// 2. Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

// 3. Component
export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {state.count}</h1>
      <h2>Text: {state.text}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- Decrement</button>
      <br /><br />
      <button onClick={() => dispatch({ type: "CHANGE_TEXT", payload: "Changed!" })}>
        Change Text
      </button>
    </div>
  );
}
