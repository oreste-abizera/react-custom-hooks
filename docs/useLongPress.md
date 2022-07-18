# useLongPress

Handle long press events. This is useful for handling long press events. Long press events are triggered when the user holds down a button for a certain amount of time.

## Usage

```jsx
import useLongPress from "./useLongPress";

export default function App() {
  const elementRef = useRef();
  useLongPress(elementRef, () => alert("Long Press"));

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
  );
}
```
