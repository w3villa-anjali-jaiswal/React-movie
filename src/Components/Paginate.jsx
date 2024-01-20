import React from "react";
import Pagination from 'react-bootstrap/Pagination';

function Paginate({ totalPages, onPageChange, currentPage }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='d-flex justify-content-center'>
      <Pagination>
        <Pagination.First onClick={() => onPageChange(1)} />
        <Pagination.Prev onClick={() => onPageChange(Math.max(currentPage - 1, 1))} />
        {pages.map((page) => (
          <Pagination.Item key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} />
        <Pagination.Last onClick={() => onPageChange(totalPages)} />
      </Pagination>
    </div>
  );
}

export default Paginate;
