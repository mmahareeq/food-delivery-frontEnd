import React from 'react'

export default function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];
 
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
       pageNumbers.push(i);
    }
  return ( pageNumbers.length > 1 ? 
   <div aria-label="Page navigation" className='flex justify-center mt-2'>
         <ul className="inline-flex items-center -space-x-px">
            {pageNumbers.map((number) => (
               <li
                  key={number}
                  onClick={() => paginate(number)}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                 <a> {number}</a>
               </li>
            ))}
         </ul>
      </div>: null
    
  )
}
