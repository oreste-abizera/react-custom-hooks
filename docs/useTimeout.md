# useTimeout

Handle timeout. This is useful for waiting for a certain amount of time. The callback is called after the timeout provided.

## Usage

```jsx
import useTimeout from "./useTimeout";

export default function App() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
```
