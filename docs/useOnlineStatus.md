# useOnlineStatus

Handle online status. This is useful for handling online status. This shows you the online status of the browser.

## Usage

```jsx
import useOnlineStatus from "./useOnlineStatus";

export default function App() {
  const { online } = useOnlineStatus();

  return <div>{online ? "Online" : "Offline"}</div>;
}
```
