import { Button, Card } from '@/components';
import Image from 'next/image';
import React from 'react';

interface Props {
  data: CardType[];
  //   style: string;
}

const ProductReviews = ({ data }: Props) => {
  return (
    <section>
      <div className="flex flex-row items-center justify-between py-5 xl:py-6">
        <h2 className="text-black font-satoshi text-xl xl:text-2xl font-bold">
          All Reviews{' '}
          <span className="text-black/60 font-satoshi text-sm xl:text-base leading-[22px] font-normal">
            (45)
          </span>
        </h2>
        <div className="flex flex-row space-x-2 lg:space-x-[10px]">
          <button
            type="button"
            className="bg-[#F0F0F0] w-10 h-10 xl:w-12 xl:h-12 rounded-[62px] flex items-center justify-center"
          >
            <Image
              src="/images/filters_icon.svg"
              width={20}
              height={18}
              alt=""
            />
          </button>
          <button
            type="button"
            className="bg-[#F0F0F0] w-[120px] h-12 rounded-[62px] hidden lg:flex items-center justify-evenly"
          >
            <span className="text-black font-satoshi text-base font-medium">
              Latest
            </span>
            <Image
              src="/images/Down_arrow.svg"
              width={11}
              height={6.5}
              alt=""
            />
          </button>
          <Button
            backgroundColor="bg-black"
            width="w-[113px] xl:w-[166px]"
            height="h-11 xl:h-12"
            padding="py-0"
          >
            <span className="text-white font-satoshi text-xs xl:text-base font-medium">
              Write a Review
            </span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 grid-flow-row overflow-y-scroll h-[48vh] md:overflow-y-auto md:h-auto md:grid-cols-2 xl:gap-5">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-5 pb-0 xl:pt-9 xl:pb-0">
        <Button
          backgroundColor="bg-white"
          width="w-[195px] md:w-[230px]"
          padding="py-[15px]"
          border="border border-black/10"
        >
          <span className="text-black font-satoshi font-medium text-sm xl:text-base">
            Load More Reviews
          </span>
        </Button>
      </div>
      {/* <Card
        id="1"
        card_type="review"
        description="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        name="Sarah M."
        rating={4.5}
        verified_customer={true}
        posted_date="August 14, 2023"
      /> */}
    </section>
  );
};

export default ProductReviews;
