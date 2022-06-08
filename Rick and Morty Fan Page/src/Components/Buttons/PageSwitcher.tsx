import { useState } from 'react';

export type PageSwitcherProps = {
    currentPage: Number;
    totalPages?: Number;
    prevPage: () => void;
    nextPage: () => void;
    specificPage: () => void;
}

const PageSwitcher = ({
  currentPage, prevPage, nextPage, totalPages, specificPage,
}: PageSwitcherProps) => (
  <div className="card__pages">
    <button
      onClick={prevPage}
      className="prev-btn small"
      disabled={currentPage === 1}
    >
      Previous Page
    </button>
    <span className="body__h1">{currentPage}</span>
    <button
      onClick={nextPage}
      className="next-btn small"
      disabled={currentPage === totalPages}
    >
      Next Page
    </button>
  </div>
);

export default PageSwitcher;
