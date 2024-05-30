import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
  label: string;
}

const FilterDetails = ({ children, label }: Props) => {
  return (
    <details
      //   open={id === 0 ? true : false}
      open
      className="group  "
    >
      <summary className="text-[#172026] list-none flex space-x-4 items-center justify-between text-base xl:text-lg font-medium leading-6 ">
        <span className="text-black font-satoshi text-xl leading-[27px] h-[27px] font-bold ">
          {label}
        </span>
        <div className="relative">
          <Image
            src="/images/down_arrow.svg"
            alt=""
            width={12}
            height={7}
            className="block group-open:hidden"
          />
          <Image
            src="/images/chevron_up.svg"
            alt=""
            width={12}
            height={7}
            className="hidden group-open:block"
          />
        </div>
      </summary>
      {/* <p className="text-[#36485C] text-base xl:text-lg font-normal leading-6 xl:leading-7">
        children
      </p> */}
      <div>{children}</div>
    </details>
  );
};

export default FilterDetails;
