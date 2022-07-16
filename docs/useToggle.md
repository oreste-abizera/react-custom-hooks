# useToggle

Handle toggle state. This is useful for toggles. The toggle state is a boolean. The toggle state can be set to true or false.

## Usage

```jsx
import useToggle from "./useToggle";
export default function App() {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div>
      <p>{toggle ? "On" : "Off"}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
```
