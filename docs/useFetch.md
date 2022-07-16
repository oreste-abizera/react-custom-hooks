# useFetch

Fetch data using the Fetch API, handle errors, and indicate loading status.

## Usage

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
