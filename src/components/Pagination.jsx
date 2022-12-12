import React from "react"

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav className="mt-2" aria-label="Page navigation">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="px-3 py-2 md:px-4 md:py-3 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-slate-50 hover:text-gray-900"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
