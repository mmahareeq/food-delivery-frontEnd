import React from "react";
import "./pagination.css";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers.length ? (
    <div aria-label="Page navigation" className="flex justify-center mt-2">
      <ul className="inline-flex items-center -space-x-px">
        <li className="px-2 py-1 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <button
            onClick={() => paginate(currentPage--)}
            disabled={currentPage === 1}
          >
            {" "}
            <i class="ri-arrow-left-s-line right-left-icon"></i>
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <button
              onClick={() => paginate(number)}
              className={
                currentPage === number ? "text-softorange" : "text-black"
              }
            >
              {" "}
              {number}
            </button>
          </li>
        ))}
        <li className="px-2 py-1 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <button
            onClick={() => paginate(currentPage++)}
            disabled={currentPage === totalItems}
          >
            <i className="ri-arrow-right-s-line right-left-icon"></i>
          </button>
        </li>
      </ul>
    </div>
  ) : null;
}
