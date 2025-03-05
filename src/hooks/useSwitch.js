import { useState } from "react";

export default function useSwitch(initialValue) {
  const [state, setState] = useState(initialValue);
  const boolSwitch = () => setState((prev) => !prev);
  return [state, boolSwitch];
}
