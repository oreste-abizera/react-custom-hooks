import React, { useEffect } from "react";

export default function useClickInside(ref, handler) {
  useEffect(() => {
    const handleClickInside = (event) => {
      event.preventDefault();
      if (ref && ref.current && ref.current.contains(event.target)) {
        // Call handler only if event happens inside element or descendent elements
        handler();
      }
      return;
    };
    document.addEventListener("click", handleClickInside, true);
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, [ref, handler]);
}
