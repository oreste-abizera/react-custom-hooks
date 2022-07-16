import React, { useRef, useEffect, useCallback, useState } from "react";

export default function useCopyToClipboard(text) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(text);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(textRef.current);
    setCopied(true);
  }, [textRef]);

  return [copied, copy];
}
