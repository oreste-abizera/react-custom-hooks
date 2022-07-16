# usePagination

Handle pagination for your data. handle next and previous links. handle page numbers.

## Usage

    ```jsx
    import usePagination from "./usePagination";

    export default function MyComponent() {
        const {
            page,
            pageCount,
            previousPage,
            nextPage,
            setPage,
        } = usePagination(1, 10);

        return (
            <div>
                <p>Page {page} of {pageCount}</p>
                <button onClick={previousPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
                <button onClick={() => setPage(1)}>Go to page 1</button>
            </div>
        );
    }
    ```
    ```
