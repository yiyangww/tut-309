"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer unmounted");
    };
  }, [isRunning]);

  return (
    <div>
      <h4>Elapsed Time: {seconds} seconds</h4>
      <button onClick={() => setIsRunning(false)}>Stop Timer</button>
    </div>
  );
}

export default Timer;
