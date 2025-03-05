"use client";
import useSwitch from "@/hooks/useSwitch";

export default function SwitchButton({ initialValue = false }) {
  const [isOn, switchIsOn] = useSwitch(initialValue);

  return (
    <div>
      <p>The button is: {isOn ? "ON" : "OFF"}</p>
      <button onClick={switchIsOn}>Switch</button>
    </div>
  );
}
