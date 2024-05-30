'use client';

import { Button, StarIcon } from '@/components';
import { useCartStore } from '@/stores/useCartStore';
import Image from 'next/image';
import React from 'react';

const array = new Array(5).fill('star', 0);
const productDetailItem: ProductDetailType = {
  id: 0,
  images: [
    {
      original: '/images/product_detail/product_image_1.png',
      thumbnail: '/images/product_detail/product_thumbnail_1.png',
    },
    {
      original: './images/product_detail/product_image_1.png',
      thumbnail: '/images/product_detail/product_thumbnail_2.png',
    },
    {
      original: '/images/product_detail/product_image_1.png',
      thumbnail: '/images/product_detail/product_thumbnail_3.png',
    },
  ],
  rating: 4.5,
  currentPrice: 260,
  previousPrice: 300,
  discount: -40,
  title: 'One Life Graphic T-shirt',
  description:
    'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  // colors: ['Judge Gray', 'Stromboli', 'Martinique'],
  colors: [
    {
      name: 'judge_gray',
      value: '#4F4631',
    },
    {
      name: 'stromboli',
      value: '#314F4A',
    },
    {
      name: 'martinique',
      value: '#31344F',
    },
  ],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  image: '/images/product_detail/product_image_1.png',
  quantity: 0,
};

const ProductDetail = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <section className="mb-28  px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw]">
      <div className="flex flex-col lg:flex-row lg:gap-9 xl:gap-10  ">
        <div className="flex flex-col-reverse md:flex-row md:space-x-[14px]">
          <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-[14px] ">
            {productDetailItem.images.map((item, index) => (
              <div
                className="relative w-[112px] h-[106px] md:w-[136px] md:h-[150px] xl:w-[152px] xl:h-[167px]"
                key={index}
              >
                <Image
                  src={item.thumbnail}
                  // width={150}
                  // height={150}
                  fill
                  alt=""
                  className="object-fill"
                />
              </div>
            ))}
          </div>
          <div className="relative w-[358px] h-[290px] md:w-[399px] md:h-[477px] xl:w-[444px] xl:h-[530px] bg-[#F0EEED] rounded-[20px] mb-3 lg:mb-0">
            <Image
              src={productDetailItem.image}
              // width={300}
              // height={300}
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="object-contain "
            />
          </div>
        </div>
        <div>
          <div className=" border-b border-black/10">
            <p className="text-black font-intagral_cf text-2xl leading-7 md:text-4xl lg:text-xl xl:text-[2.1vw] 2xl:text-[40px] lg:leading-normal  font-bold mt-[20px] lg:mt-0">
              {productDetailItem.title}
            </p>
            <div className="flex flex-row py-3 space-x-4">
              <div className="flex flex-row space-x-[5px] xl:space-x-[7px] items-center">
                {array.map((item) => (
                  <div className="">
                    <StarIcon
                      width="w-[18.5px] xl:w-[24.5px]"
                      height="h-[18.5px] xl:h-[24.5px]"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-satoshi text-black text-sm lg:text-base font-normal">
                  {productDetailItem.rating}/
                </span>
                <span className="font-satoshi text-black/60 text-sm lg:text-base font-normal">
                  5
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-[10px] lg:space-x-3">
              <span className="font-satoshi text-black text-2xl xl:text-[32px] font-bold">
                ${productDetailItem.currentPrice}
              </span>
              {productDetailItem.previousPrice && (
                <span className="font-satoshi text-black/40 text-2xl xl:text-[32px] font-bold">
                  ${productDetailItem.previousPrice}
                </span>
              )}
              {productDetailItem.discount && (
                <span className="bg-[#FF3333]/10 py-[3px] px-2 xl:px-[13.5px] xl:py-[6px] font-satoshi text-sm lg:text-base font-medium text-[#FF3333] rounded-[62px]">
                  {productDetailItem.discount}%
                </span>
              )}
            </div>
            <p className="text-black/60 font-satoshi font-normal text-sm xl:text-base leading-5 xl:leading-[22px] pt-4 pb-4 md:max-w-[500px] xl:max-w-[590px]">
              {productDetailItem.description}
            </p>
          </div>
          <div className="border-b border-black/10">
            <h2 className="text-black/60 font-satoshi font-normal text-sm xl:text-base pt-4 leading-none">
              Select Colors
            </h2>
            <div className="flex flex-row space-x-3 xl:space-x-4 pt-4 pb-5">
              {productDetailItem.colors.map((item) => {
                return (
                  <div
                    key={item.name}
                    style={{ backgroundColor: item.value }}
                    className={`relative w-10 h-10 lg:w-[37px] lg:h-[37px] rounded-full flex items-center justify-center `}
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
          </div>
          <div className="border-b border-black/10">
            <h2 className="text-black/60 font-satoshi font-normal text-sm xl:text-base pt-4 leading-none">
              Choose Size
            </h2>
            <div className="flex flex-row space-x-3 xl:space-x-4 pt-4 pb-5">
              {productDetailItem.sizes.map((item) => {
                return (
                  <div
                    key={item}
                    className={`relative bg-[#F0F0F0] w-auto h-[39px] lg:h-[41px]  xl:h-[46px] px-4 lg:px-4 xl:px-6 py-[10px] lg:py-3 rounded-[62px] flex items-center justify-center `}
                  >
                    <span className="text-black/60 font-satoshi font-normal text-sm xl:text-[14px] 2xl:text-base">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row h-11 lg:h-[46px] xl:h-[52px] space-x-3 xl:space-x-5 mt-5">
            {/* <button type="button">
              <Image
                src="/images/minus_icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </button>
            <span>1</span>
            <button type="button">
              <Image
                src="/images/plus_icon.svg"
                width={20}
                height={20}
                alt=""
              />
            </button> */}
            <div className="flex flex-row">
              <Button
                backgroundColor="bg-[#F0F0F0]"
                width="w-[52px] md:w-[65px] lg:w-[52px] xl:w-[65px]"
                border="rounded-r-none"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/minus_icon.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </Button>
              <div className="bg-[#F0F0F0]  items-center flex justify-center">
                <span className="text-black font-satoshi text-lg xl:text-[22px] font-medium">
                  1
                </span>
              </div>
              <Button
                backgroundColor="bg-[#F0F0F0]"
                width="w-[52px] md:w-[65px] lg:w-[52px] xl:w-[65px]"
                border="rounded-l-none"
                padding="py-0"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/plus_icon.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </Button>
            </div>
            <Button
              backgroundColor="bg-black"
              width="w-[236px] md:w-[300px] lg:w-[210px] xl:w-[20vw] 2xl:w-[400px]"
              padding="py-0"
              onClick={() => addToCart(productDetailItem)}
            >
              <span className="text-white font-satoshi text-base ">
                Add to Cart
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
