import React, { useRef } from "react";
import useClickOutside from "./useClickOutside";

export default function App() {
  const ref = useRef();

  const handleClickOutside = () => {
    console.log("Clicked outside");
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref}>
      <p>Click Outside me</p>
    </div>
  );
}
