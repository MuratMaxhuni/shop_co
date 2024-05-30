'use client';
import Image from 'next/image';
import React from 'react';
import FilterIcon from '../_icons/FilterIcon';
import ArrowRigthIcon from '../_icons/ChevronRightIcon';
import ChevronRightIcon from '../_icons/ChevronRightIcon';
import FilterDetails from './FilterDetails';
import ComponentSlider from './ComponentSlider';
import { Button } from '@/components';

const filters: FiltersType = {
  categoryTitle: ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'],
  priceRange: 1000,
  colors: [
    {
      name: 'Green',
      value: '#00C12B',
    },
    {
      name: 'Red',
      value: '#F50606',
    },
    {
      name: 'Yellow',
      value: '#F5DD06',
    },
    {
      name: 'Orange',
      value: '#F57906',
    },
    {
      name: 'Sky Blue',
      value: '#06CAF5',
    },
    {
      name: 'Blue',
      value: '#063AF5',
    },
    {
      name: 'Violet',
      value: '#7D06F5',
    },
    {
      name: 'Fashion Fuchsia',
      value: '#F506A4',
    },
    {
      name: 'White',
      value: '#FFFFFF',
    },
    {
      name: 'Black',
      value: '#000000',
    },
  ],
  sizes: [
    'XX-Small',
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large',
  ],
  dressStyle: ['Casual', 'Formal', 'Party', 'Gym'],
};

const handleChange = ({ min, max }: { min: number; max: number }) => {
  console.log(`min = ${min}, max = ${max}`);
};

interface Props {
  showModal?: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters = ({ showModal, setModal }: Props) => {
  // const showModal = true;
  return (
    <section>
      <div
        className={`${
          showModal ? 'w-full rounded-t-[20px]' : 'w-[295px] rounded-[20px]'
        }  border border-black/10`}
      >
        <div className="px-6 pt-5 pb-[30px]">
          <div className="flex flex-row justify-between border-b border-black/10 pb-6">
            <h3 className="text-black font-satoshi font-bold text-xl">
              Filters
            </h3>
            {!showModal && (
              <div>
                {/* <Image
                src="/images/filters_icon.svg"
                width={24}
                height={24}
                alt=""
              /> */}
                <FilterIcon opacity={0.4} />
              </div>
            )}
            {showModal && (
              <div>
                <Image
                  src="/images/close_modal_icon.svg"
                  width={15.76}
                  height={15.76}
                  alt=""
                  onClick={() => (setModal ? setModal(!showModal) : '')}
                />
              </div>
            )}
          </div>
          {/* Categories title */}
          <div className="flex flex-col space-y-5 border-b border-black/10 py-6">
            {filters.categoryTitle.map((item) => (
              <div
                key={item}
                className="flex flex-row justify-between items-center"
              >
                <h3 className="text-black/60 font-satoshi text-base leading-4 h-4 font-normal">
                  {item}
                </h3>
                <div>
                  <ChevronRightIcon opacity={0.6} />
                </div>
              </div>
            ))}
          </div>
          {/* Price Range */}
          <div className="pt-5 pb-6  border-b border-black/10 ">
            <FilterDetails label="Price">
              <div className="flex py-6">
                <ComponentSlider
                  min={0}
                  max={300}
                  // onChange={({ min, max }: { min: number; max: number }) =>
                  //   console.log(`min = ${min}, max = ${max}`)
                  // }
                  onChange={handleChange}
                />{' '}
              </div>
            </FilterDetails>
          </div>
          {/* Colors */}
          <div className="pt-5 pb-6  border-b border-black/10">
            <FilterDetails label="Colors">
              <div className="flex flex-row flex-wrap gap-[15px] pt-5">
                {filters.colors.map((item) => {
                  return (
                    <div
                      key={item.name}
                      style={{ backgroundColor: item.value }}
                      className={`relative w-10 h-10 lg:w-[37px] lg:h-[37px] rounded-full flex items-center justify-center border border-black/20 `}
                    >
                      <Image
                        src="/images/check_mark_icon.svg"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </FilterDetails>
          </div>
          {/* Sizes */}
          <div className="pt-5 pb-6  border-b border-black/10 ">
            <FilterDetails label="Sizes">
              <div className="flex flex-row flex-wrap gap-2 pt-5">
                {filters.sizes.map((item) => (
                  <div
                    key={item}
                    className={`relative bg-[#F0F0F0] w-auto h-[39px] lg:h-[41px]  xl:h-[39px] px-4 lg:px-4 xl:px-6 py-[10px] lg:py-3 rounded-[62px] flex items-center justify-center `}
                  >
                    <span className="text-black/60 font-satoshi font-normal text-sm xl:text-[14px] 2xl:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FilterDetails>
          </div>
          {/* Dress Style */}
          <div className="pt-5 pb-6">
            <FilterDetails label="Dress Style">
              <div className="flex flex-col space-y-5 pt-5">
                {filters.dressStyle.map((item) => (
                  <div
                    key={item}
                    className="flex flex-row justify-between items-center"
                  >
                    <h3 className="text-black/60 font-satoshi text-base leading-4 h-4 font-normal">
                      {item}
                    </h3>
                    <div>
                      <ChevronRightIcon opacity={0.6} />
                    </div>
                  </div>
                ))}
              </div>
            </FilterDetails>
          </div>
          {/* Button Apply Filter */}
          <Button
            backgroundColor="bg-black"
            width="w-full "
            height="h-12 2xl:h-16"
          >
            <span className="text-white font-satoshi text-sm xl:text-base font-medium">
              Apply Filter
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
