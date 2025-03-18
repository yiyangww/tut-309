"use client";
import { useRouter } from "next/navigation";
import ConsoleLog from "@/components/ConsoleLog";

export default function ConsoleLogPage() {
  const router = useRouter();

  return (
    <div>
      <ConsoleLog />
      <br />
      <br />
      <button onClick={() => router.push("/")}>Return to Home</button>
    </div>
  );
}
