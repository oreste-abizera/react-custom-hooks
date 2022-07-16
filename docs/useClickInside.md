# useClickOutside

Handle click outside of component. This is useful for modals and popups.

## Usage

```jsx
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
```

[]: # Language: jsx
[]: # Path: docs\useClickOutside.md
[]: # Compare this snippet from docs\useCopyToClipBoard.md:
[]: # # useCopyToClipBoard
[]: #
[]: # Copy the text to clipboard. The text is copied to the clipboard as plain text.
[]: #
[]: # ## Usage
[]: #
[]: # `jsx []: # import useCopyToClipBoard from "./useCopyToClipBoard"; []: # []: # export default function App() { []: # const [copied, copy] = useCopyToClipBoard("Hello World"); []: # return ( []: # <div> []: # <p>{copied ? "Copied!" : "Copy to clipboard"}</p> []: # <button onClick={copy}>Copy</button> []: # </div> []: # ); []: # } []: # `
[]: #
[]: # Compare this snippet from docs\useClickInside.md:
[]: # # useClickInside
[]: #
[]: # Handle click inside of component. This is useful for modals and popups.
[]: #
[]: # ## Usage
[]: #
[]: # ```jsx
[]: # import useClickInside from "./useClickInside";
[]: #
[]: # export default function App() {
[]: # const ref = useRef();
[]: #
[]: # const handleClickInside = () => {
[]: # console.log("Clicked inside");
[]: # };
[]: #
[]: # useClickInside(ref,

```

```
