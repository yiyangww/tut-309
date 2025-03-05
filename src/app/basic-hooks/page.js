"use client";
import { useRouter } from "next/navigation";
import Counter from "@/components/Counter";
import NewCounter from "@/components/NewCounter";
import Timer from "@/components/Timer";

export default function BasicHooksPage() {
  const router = useRouter();

  return (
    <div>
      <Counter />
      <NewCounter />
      <Timer />
      <br />
      <br />
      <button onClick={() => router.push("/")}>Return to Home</button>
      {/* <br /><a href="/">Return to Home</a> */}
    </div>
  );
}
