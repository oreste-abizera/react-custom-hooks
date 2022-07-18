# usePrevious

Handle previous value. This is useful for handling previous values. You can pass state to this hook and it will return the previous value.

## Usage

```jsx
export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyle");
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
}
```
