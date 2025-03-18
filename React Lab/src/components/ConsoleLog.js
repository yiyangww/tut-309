"use client";
import { useState } from "react";
import useConsoleLog from "@/hooks/useConsoleLog";

export default function ConsoleLog() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
    </div>
  );
}
