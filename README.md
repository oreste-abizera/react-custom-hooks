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
