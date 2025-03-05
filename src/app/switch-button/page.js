"use client";
import { useRouter } from "next/navigation";
import SwitchButton from "@/components/SwitchButton";

export default function SwitchButtonPage() {
  const router = useRouter();

  return (
    <div>
      <SwitchButton />
      <br />
      <br />
      <button onClick={() => router.push("/")}>Return to Home</button>
    </div>
  );
}
