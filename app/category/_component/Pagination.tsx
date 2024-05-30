'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';

// const p: Array<React.ReactElement> = [];
// let start = 1;

const Pagination = () => {
  const [start, setStart] = useState(1);
  const pagesCount = Math.ceil(90 / 9); // 100/10(items / pageSize)

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: 2 }, (_, i) => i + 1);

  const Prev = () => {
    if (start > 1) {
      // start--;
      setStart(start - 1);
      // We have changed the start page, total rebuild the pagination
      rebuildPagination(start, totalcount);
    }
    console.log('PREV');
  };

  const Next = () => {
    if (start < totalcount) {
      setStart(start + 1);
      // We have changed the start page, total rebuild the pagination
      rebuildPagination(start, totalcount);
    }
    console.log('NEXT');
  };

  const handleEvent = (e: SyntheticEvent) => {
    // console.log(e.currentTarget.childNodes[0].nodeValue);
    const start2 = Number(e.currentTarget.childNodes[0].nodeValue);
    // setStart(value);
    console.log({ start2 });
    setStart(start2);
    rebuildPagination(start, totalcount);
  };

  let totalcount = 12;

  function rebuildPagination(currentPage: number, totalcount: number) {
    let p: Array<React.ReactElement> = [];

    if (totalcount <= 6) {
      // for ( i = 1; i <= totalcount; i++) {
      //   addButton(i, currentPage);
      // }
      for (let i = 1; i <= totalcount; i++) {
        // const element = array[i];
        p.push(addButton(i, currentPage));
        // addButton(i, currentPage);
      }
    } else {
      // Always print first page button
      p.push(addButton(1, currentPage));

      // Print "..." if currentPage is > 3
      if (currentPage > 3) {
        p.push(
          <div
            key={'...1'}
            className="text-black/60 font-satoshi text-sm leading-5 font-medium flex items-center"
          >
            ...
          </div>
        );
      }

      // special case where last page is selected...
      // Without this special case, only 2 buttons would be shown after ... if you were on last page
      if (currentPage == totalcount) {
        p.push(addButton(currentPage - 2, currentPage));
      }

      // Print previous number button if currentPage > 2
      if (currentPage > 2) {
        p.push(addButton(currentPage - 1, currentPage));
      }

      //Print current page number button as long as it not the first or last page
      if (currentPage != 1 && currentPage != totalcount) {
        p.push(addButton(currentPage, currentPage));
      }

      //print next page number button if currentPage < lastPage - 1
      if (currentPage < totalcount - 1) {
        p.push(addButton(currentPage + 1, currentPage));
      }
      // special case where first page is selected...
      // Without this special case, only 2 buttons would be shown before ... if you were on first page
      if (currentPage == 1) {
        p.push(addButton(currentPage + 2, currentPage));
      }

      //print "..." if currentPage is < lastPage -2
      if (currentPage < totalcount - 2) {
        p.push(
          <div
            key={'...2'}
            className="text-black/60 font-satoshi text-sm leading-5 font-medium flex items-center"
          >
            ...
          </div>
        );
      }

      //Always print last page button if there is more than 1 page
      if (totalcount > 1) {
        p.push(addButton(totalcount, currentPage));
      }
    }

    return p;
  }

  const addButton = (number: number, currentPage: number) => {
    return (
      <div
        key={number}
        className={`py-[6px] px-[14px] lg:py-[6px] lg:px-[15.5px] ${
          number === currentPage ? 'bg-black/10 rounded-lg' : ''
        }`}
      >
        <Link
          href="#"
          onClick={handleEvent}
          // scroll={false}
          className="text-black/60 font-satoshi text-xs lg:text-sm leading-5 font-medium"
        >
          {number}
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-row pt-5 justify-between">
      <Link href="#" onClick={Prev}>
        <div className="flex flex-row items-center space-x-2 border border-black/10 rounded-lg w-fit py-2 px-[13px] lg:px-[14px]">
          <div className="relative w-[9px] h-[9px] lg:w-[11.6px] lg:h-[11.6px] ">
            <Image
              src="/images/pagination_arrow_left.svg"
              // width={11.6}
              // height={11.6}
              fill
              alt=""
            />
          </div>
          <span className="text-black font-satoshi text-xs lg:text-sm font-medium leading-5">
            Previous
          </span>
        </div>
      </Link>
      {/* <div className="flex flex-row">
        {pages.map((page) => (
          <div className="py-[6px] px-[15.5px]">
            <Link
              href="#"
              className="text-black/60 font-satoshi text-sm leading-5 font-medium"
            >
              {page}
            </Link>
          </div>
        ))}
      </div> */}
      <div className="flex flex-row">
        {rebuildPagination(start, totalcount)}
      </div>
      <Link href="#" onClick={Next}>
        <div className="flex flex-row items-center space-x-2 border border-black/10 rounded-lg w-fit py-2 px-[13px] lg:px-[14px]">
          <span className="text-black font-satoshi text-xs lg:text-sm font-medium leading-5">
            Next
          </span>
          <div className="relative w-[9px] h-[9px] lg:w-[11.6px] lg:h-[11.6px] ">
            <Image
              src="/images/pagination_arrow_right.svg"
              // width={11.6}
              // height={11.6}
              fill
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
