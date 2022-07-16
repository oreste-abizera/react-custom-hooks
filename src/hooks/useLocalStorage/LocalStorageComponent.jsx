import React from "react";

import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [state, setState] = useLocalStorage("state", {
    count: 0,
    name: "",
  });

  const handleClick = () => {
    setState({
      count: state.count + 1,
      name: "",
    });
  };

  return (
    <div>
      <p>{state.count}</p>
      <p>{state.name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
