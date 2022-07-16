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
        const { currentPage, totalPages, setCurrentPage } = usePagination(
          1,
          10
        );
        return (
          <div>
            <p>{`${currentPage} of ${totalPages}`}</p>
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
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
              <button onClick={() => setValue("my-new-value")}>
                Change Value
              </button>
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
                <button onClick={() => setValue("my-new-value")}>
                  Change Value
                </button>
              </div>
            );
          }
          ```
