import { useState } from 'react';

export default function useCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  function goNext() {
    setCurrentPage((prev) => prev + 1);
  }

  function goPrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function reset(page = 0) {
    setCurrentPage(page);
  }

  return {
    currentPage,
    goNext,
    goPrev,
    reset,
  };
}
