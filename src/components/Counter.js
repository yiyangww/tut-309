"use client";
import { useState } from "react";

function Counter() {
  console.log("rendered");

  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Simple Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
