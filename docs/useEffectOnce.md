# useEffectOnce

Handle effects that only run once. This is useful for effects that only need to run once.

## Usage

```jsx
import useEffectOnce from "./useEffectOnce";

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}
```
