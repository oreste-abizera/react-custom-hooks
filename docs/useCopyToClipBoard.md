# useCopyToClipBoard

Copy the text to clipboard. The text is copied to the clipboard as plain text.

## Usage

```jsx
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
```
