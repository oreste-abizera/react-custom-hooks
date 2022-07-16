import React, { useCallback, useState } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(
    (e) => {
      setValue(!value);
      e.stopPropagation();
    },
    [value]
  );

  return [value, toggle];
}
