# useSessionStorage

Handle session storage in your application. This is a simple wrapper around the [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) API. It provides a simple way to store data in session storage, and a way to retrieve it.

## Usage

    ```jsx
    import useSessionStorage from "./useSessionStorage";

    export default function App(){
        const [state, setState] = useSessionStorage("my-key", {
            foo: "bar"
        });

        return (
            <div>
                <button onClick={() => setState({ foo: "baz" })}>
                    Change state
                </button>
                <p>{state.foo}</p>
            </div>
        );
    }
    ```
