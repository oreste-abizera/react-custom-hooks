import React, { useRef } from "react";
import useClickInside from "./useClickInside";

export default function App() {
  const ref = useRef();

  const handleClickInside = () => {
    console.log("Clicked Inside");
  };

  useClickInside(ref, handleClickInside);

  return (
    <div ref={ref}>
      <p>Click Inside me</p>
    </div>
  );
}
