'use client';

import ProductCard from '@/components/ProductCard';
import React from 'react';
import FilterIcon from '../_icons/FilterIcon';
import Pagination from './Pagination';

interface Props {
  casuals: Array<ProductType>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  valueModal: boolean;
  //   title: string;
}

const CasualCollection = ({ casuals, setModal, valueModal }: Props) => {
  const handleFilters = () => {
    setModal(!valueModal);

    console.log('Filter icon handle Filters');
  };

  return (
    <section className="w-full">
      <div>
        <div className="flex flex-row items-center lg:justify-between space-x-2 xl:space-x-0 mb-4 xl:mb-4">
          <h1 className="text-black font-satoshi text-2xl xl:text-[32px] font-bold leading-[43px]">
            Casual
          </h1>
          <div className="flex flex-row space-x-3 w-full lg:w-auto justify-between items-center lg:justify-normal">
            <p className="text-black/60 font-satoshi text-sm xl:text-base font-normal ">
              Showing 1-10 of 100 Products
            </p>
            <div className="hidden lg:block space-x-1">
              <span className="text-black/60 font-satoshi text-sm xl:text-base font-normal ">
                Sort by:
              </span>
              <select
                name="sortingBy"
                className="text-black font-satoshi text-sm xl:text-base font-medium custom-select appearance-none "
              >
                <option
                  value="most popular"
                  className="text-black font-satoshi text-sm xl:text-base font-medium"
                >
                  Most Popular
                </option>
                <option
                  value="less popular"
                  className="text-black font-satoshi text-sm xl:text-base font-medium"
                >
                  Less Popular
                </option>
                <option
                  value="expensive"
                  className="text-black font-satoshi text-sm xl:text-base font-medium"
                >
                  Expensive
                </option>
              </select>
            </div>
            <div
              // onClick={handleFilters}
              className="lg:hidden bg-[#F0F0F0]  rounded-[62px] flex items-center justify-center p-2 cursor-pointer"
              // onClick={() => console.log('Filter icon')}
            >
              <FilterIcon opacity={1} onClick={handleFilters} />
            </div>
          </div>
        </div>
        <div className=" border-b border-b-black/10 pb-8">
          {/* <div className="flex flex-row flex-wrap gap-4 xl:gap-[1.4vw] 2xl:justify-between overflow-auto xl:overflow-hidden"> */}
          <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 gap-y-6 xl:gap-y-9">
            {casuals.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                description={item.description}
                rating={item.rating}
                currentPrice={item.currentPrice}
                previousPrice={item.previousPrice}
                discount={item.discount}
                // w-[172px] h-[174px]
                addStyle="w-[43vw] h-[46vw]  sm:w-[200px] sm:h-[194px] md:w-[31vw] md:h-[29vw] lg:w-[31vw] lg:h-[29vw] xl:w-[19vw] xl:h-[20.7vw] 2xl:w-[20.5vw] 2xl:h-[20.7vw]"
              />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default CasualCollection;
