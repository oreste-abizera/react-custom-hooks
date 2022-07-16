# React Custom Hooks

custom react hooks for better performance and faster development

- **useFetch**:
  [src](https://github.com/oreste-abizera/react-custom-hooks/blob/main/src/hooks/useFetch/useFetch.js)
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
