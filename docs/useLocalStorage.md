# useLocalStorage

Handle local storage in your application. This is a simple wrapper around the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) API. It provides a simple way to store data in local storage, and a way to retrieve it.

## Usage

    ```jsx
    import useLocalStorage from "./useLocalStorage";

    export default function App(){
        const [state, setState] = useLocalStorage("my-key", {
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
