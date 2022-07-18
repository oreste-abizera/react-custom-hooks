# useEventListener

Handle events. This is useful for listening to events.

## Usage

```jsx
import useEventListener from "./useEventListener";

export default function App() {
  const [key, setKey] = useState("");
  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
}
```
