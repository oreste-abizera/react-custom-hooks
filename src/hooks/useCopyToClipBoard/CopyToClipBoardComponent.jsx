import React from "react";
import useCopyToClipboard from "./useCopyToClipBoard";

export default function App() {
  const [copied, copy] = useCopyToClipboard("Hello World");
  return (
    <div>
      <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
      <button onClick={copy}>Copy</button>
    </div>
  );
}
