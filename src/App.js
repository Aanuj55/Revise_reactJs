import React from "react";
import "./styles.css";
import "./Counter";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Counter for state change</h1>
      <Counter />
    </div>
  );
}
