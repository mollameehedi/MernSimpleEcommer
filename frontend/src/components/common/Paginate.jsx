import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const items = [1, 2, 3, 4, 5, 6, 7];

function Items({ currentItems }) {
  return (
    <>
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-5">
      {currentItems &&
        currentItems.map((item,index) => (
          <div key={index}>
            <ProductCard/>
          </div>
        ))}
       </div>
    </>
  );
}

export default function Paginate({ itemsPerPage }) {
    
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        className="ml-[-15px] flex gap-4 mt-5"
        activeClassName="bg-primaryRed text-white bg-black"
        pageClassName=" p-3 border-[1px] border-[#F0F0F0] font-dm font-normal text-[14px] text-secondary"
        nextClassName={
            "p-3 border-[1px] border-[#F0F0F0] font-dm font-normal text-base text-secondary"
          }
          previousClassName={
            "p-3 border-[1px] border-[#F0F0F0] font-dm font-normal text-base text-secondary"
          }
      />
    </>
  );
}

