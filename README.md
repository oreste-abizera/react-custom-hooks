# React Custom Hooks

custom react hooks for better performance and faster development

- **useFetch**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useFetch/useFetch.jsx)
  /
  [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useFetch.md)

  ```jsx
  import useFetch from "./useFetch";
  const App = () => {
    const {
      loading,
      error,
      data = [],
    } = useFetch("https://jsonplaceholder.typicode.com/posts");
    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              <a href={`https://jsonplaceholder.typicode.com/posts/${item.id}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  ```

- **useCopyToClipboard**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useCopyToClipboard/useCopyToClipboard.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useCopyToClipboard.md)

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

- **useClickOutside**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useClickOutside/useClickOutside.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useClickOutside.md)

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

- **useClickInside**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useClickInside/useClickInside.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useClickInside.md)

  ```jsx
  import useClickInside from "./useClickInside";
  export default function App() {
    const ref = useRef();
    const handleClickInside = () => {
      console.log("Clicked inside");
    };
    useClickInside(ref, handleClickInside);
    return (
      <div ref={ref}>
        <p>Click Inside me</p>
      </div>
    );
  }
  ```

- **useToggle**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useToggle/useToggle.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useToggle.md)

  ````jsx
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

  ````

- **usePagination**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/usePagination/usePagination.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/usePagination.md)

  ```jsx
  import usePagination from "./usePagination";

  export default function App() {
    const { currentPage, totalPages, setCurrentPage } = usePagination(1, 10);
    return (
      <div>
        <p>{`${currentPage} of ${totalPages}`}</p>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    );
  }
  ```

- **useLocalStorage**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useLocalStorage/useLocalStorage.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useLocalStorage.md)

  ```jsx
  import useLocalStorage from "./useLocalStorage";
  export default function App() {
    const [value, setValue] = useLocalStorage("my-key", "my-value");
    return (
      <div>
        <p>{value}</p>
        <button onClick={() => setValue("my-new-value")}>Change Value</button>
      </div>
    );
  }
  ```

- **useSessionStorage**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useSessionStorage/useSessionStorage.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useSessionStorage.md)

  ```jsx
  import useSessionStorage from "./useSessionStorage";

  export default function App() {
    const [value, setValue] = useSessionStorage("my-key", "my-value");
    return (
      <div>
        <p>{value}</p>
        <button onClick={() => setValue("my-new-value")}>Change Value</button>
      </div>
    );
  }
  ```

- **useTimeout**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useTimeout/useTimeout.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useTimeout.md)

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

- **useEventListener**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useEventListener/useEventListener.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useEventListener.md)

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

- **useArray**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useArray/useArray.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useArray.md)

  ```jsx
  import useArray from "./useArray";

  export default function App() {
    const { array, set, push, remove, filter, update, clear } = useArray([
      1, 2, 3, 4, 5, 6,
    ]);

    return (
      <div>
        <div>{array.join(", ")}</div>
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
        <button onClick={() => remove(1)}>Remove Second Element</button>
        <button onClick={() => filter((n) => n < 3)}>
          Keep Numbers Less Than 4
        </button>
        <button onClick={() => set([1, 2])}>Set To 1, 2</button>
        <button onClick={clear}>Clear</button>
      </div>
    );
  }
  ```

- **usePrevious**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/usePrevious/usePrevious.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/usePrevious.md)

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

- **useOnlineStatus**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useOnlineStatus/useOnlineStatus.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useOnlineStatus.md)

  ```jsx
  import useOnlineStatus from "./useOnlineStatus";

  export default function App() {
    const { online } = useOnlineStatus();

    return <div>{online ? "Online" : "Offline"}</div>;
  }
  ```

- **useEffectOnce**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useEffectOnce/useEffectOnce.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useEffectOnce.md)

  ```jsx
  import useEffectOnce from "./useEffectOnce";

  export default function App() {
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

- **useLongPress**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useLongPress/useLongPress.jsx) / [doc](https://github.com/oreste-abizera/react-custom-hooks/blob/main/docs/useLongPress.md)

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
