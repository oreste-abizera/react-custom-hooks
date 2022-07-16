# useClickOutside

Handle click outside of component. This is useful for modals and popups.

## Usage

```jsx
import useClickOutside from "./useClickOutside";

export default function App() {
  const ref = useRef();

  const handleClickOutside = () => {
    console.log("Clicked outside");
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref}>
      <p>Click Outside me</p>
    </div>
  );
}
```

```

```
