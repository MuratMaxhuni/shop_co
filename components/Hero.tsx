'use client';

import { companies } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '.';

interface SizeType {
  diff_w: number;
  diff_h: number;
}

const statistics: Array<StatsType> = [
  {
    title: '200+',
    subtitle: 'International Brands',
  },
  {
    title: '20,00+',
    subtitle: 'High-Quality Products',
  },
  {
    title: '30,000+',
    subtitle: 'Happy Customers',
  },
];
const array: Array<SizeType> = [];

const Hero = () => {
  const [imageSize, setSmageSize] = useState({
    width: 1,
    height: 1,
  });

  return (
    <section>
      <div className="bg-[#F2F0F1]">
        <div className="relative lg:bg-hero-background lg:bg-no-repeat lg:bg-contain w-[100vw] lg:h-[46vw] md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw] ">
          <div className="absolute right-[5vw] top-[6vw] hidden lg:block">
            <Image
              src="/images/shape_large_desk.svg"
              alt="shape"
              width={104}
              height={104}
            />
          </div>
          <div className="absolute right-[45vw] top-[18vw] hidden lg:block ">
            <Image
              src="/images/shape_small_desk.svg"
              alt="shape"
              width={56}
              height={56}
            />
          </div>
          <div className="pt-10 lg:max-w-md xl:max-w-[596px] px-4">
            <h1 className="text-black lg:text-left font-intagral_cf text-4xl lg:text-[40px] xl:text-[64px] font-bold leading-[34px] lg:leading-10 xl:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black/60  lg:text-left text-sm xl:text-base font-normal leading-5 xl:leading-[22px] pt-5 pb-6 xl:py-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              backgroundColor="bg-black"
              width="w-full md:w-[210px]"
              padding="py-[15px]"
            >
              <span className="text-white font-satoshi text-base ">
                Shop Now
              </span>
            </Button>
          </div>
          <div className="flex flex-row pt-5  xl:pt-12 px-10 lg:px-0  flex-wrap justify-center md:justify-start space-y-[14px] lg:space-y-0">
            {statistics.map((item) => (
              <div
                key={item.title}
                className=" flex flex-row nth-[1]:mt-[12px] lg:nth-[1]:mt-0 [&:nth-child(2)>hr]:hidden md:[&:nth-child(2)>hr]:block [&:nth-child(3)>hr]:hidden"
              >
                <div className=" flex flex-col lg:gap-[10px]">
                  <h2 className="text-black  font-satoshi text-2xl xl:text-[40px] font-bold ">
                    {item.title}
                  </h2>
                  <h3 className="text-black/60  font-satoshi font-normal text-xs xl:text-base leading-[22px]">
                    {item.subtitle}
                  </h3>
                </div>
                <hr className="w-[1px] h-full bg-black/10 mx-[27.5px] xl:mx-8 " />
              </div>
            ))}
          </div>

          <div className="relative lg:hidden">
            <Image
              src="/images/shop_hero_image_small.png"
              alt="hero image"
              className="object-contain w-full h-auto"
              sizes="(max-width: 768px) 100vw"
              width={0}
              height={0}
              priority
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }} // optional
            />
            <div className="absolute left-[5.2vw] top-[35.2vw] lg:hidden">
              <Image
                src="/images/shape_small_mobile.svg"
                alt="shape"
                width={44}
                height={44}
              />
            </div>
            <div className="absolute right-[5.2vw] top-[9.5vw] lg:hidden">
              <Image
                src="/images/shape_small_mobile.svg"
                alt="shape"
                width={76}
                height={76}
              />
            </div>
          </div>
        </div>
        <div className="bg-black px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw] space-x-8 lg:space-x-0 py-10 xl:py-0 flex flex-row h-auto sm:w-auto flex-wrap lg:flex-nowrap gap-y-5 lg:gap-y-0 lg:w-full justify-center lg:justify-between">
          {companies.map((comp, index) => (
            <div key={comp.title} className=" relative">
              <Image
                src={comp.icon}
                alt={comp.title}
                className="object-contain  lg:w-auto xl:py-[42px] "
                priority={true}
                onLoad={(e) => {
                  const natural_w = e.currentTarget.naturalWidth;
                  const natural_h = e.currentTarget.naturalHeight;
                  const natural_w_mobile =
                    e.currentTarget.naturalWidth * (30 / 100);
                  const natural_h_mobile =
                    e.currentTarget.naturalHeight * (30 / 100);
                  const diff_w = natural_w - natural_w_mobile;
                  const diff_h = natural_h - natural_h_mobile;

                  setSmageSize({
                    width: diff_w,
                    height: diff_h,
                  });
                  array.push({ diff_w, diff_h });
                }}
                width={array[index]?.diff_w || 0}
                height={array[index]?.diff_h || 0}

                // width={imageSize.width}
                // height={imageSize.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
