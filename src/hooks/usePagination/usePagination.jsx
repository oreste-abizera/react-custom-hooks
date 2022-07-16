import React, { useState } from "react";

export default function usePagination(defaultPage = 1, defaultCount = 10) {
  const [pageCount, setPageCount] = useState(defaultCount);
  const [page, setPage] = useState(defaultPage);

  const onToNextPage = () => {
    setPage(page + 1);
  };

  const onToPreviousPage = () => {
    setPage(page - 1);
  };

  const handlePage = (value) => {
    setPage(value);
  };

  const resetPage = () => {
    setPage(defaultValue);
  };

  return [
    page,
    handlePage,
    resetPage,
    onToNextPage,
    onToPreviousPage,
    setPage,
    pageCount,
    setPageCount,
  ];
}
