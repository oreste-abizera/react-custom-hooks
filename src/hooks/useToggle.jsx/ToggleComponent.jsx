import React from "react";

import useToggle from "./useToggle";

export default function App() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <p>{value ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
