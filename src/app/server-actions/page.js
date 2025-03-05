"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { greetUser, incrementCounter } from "../../actions";

export default function ServerActionsDemo() {
  const router = useRouter();

  // State for greeting form
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // State for counter
  const [count, setCount] = useState(0);

  // Handle form submission (calls server action)
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await greetUser(name);
    setMessage(response);
  }

  // Handle counter increment (calls server action)
  async function handleClick() {
    const newCount = await incrementCounter();
    setCount(newCount);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Form Submission</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

      <br />
      <hr />
      <br />

      {/* Counter Section */}
      <h2>Server Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>+1</button>

      <br />
      <br />

      {/* Return Button */}
      <button onClick={() => router.push("/")}>Return to Home</button>
    </div>
  );
}
