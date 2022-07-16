import React from "react";

import usePagination from "./usePagination";

export default function App() {
  const [page, handlePage, resetPage, onToNextPage, onToPreviousPage, setPage] =
    usePagination(1, 10);

  return (
    <div>
      <p>Page: {page}</p>
      <button onClick={onToPreviousPage}>Previous</button>
      <button onClick={onToNextPage}>Next</button>
      <button onClick={() => handlePage(page + 1)}>+1</button>
      <button onClick={() => handlePage(page - 1)}>-1</button>
      <button onClick={resetPage}>Reset</button>
    </div>
  );
}
