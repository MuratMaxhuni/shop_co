'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from './hooks/use-windowsize';

interface SizeType {
  natural_w: number;
  natural_h: number;
}

const array: Array<SizeType> = [];

const dressStyles: Array<DressStyleType> = [
  {
    id: 0,
    style: 'Casual',
    image_large: '/images/category_styles/casual_large3.svg',
    image_mobile: '/images/category_styles/casual_mobile2.png',
  },
  {
    id: 1,
    style: 'Formal',
    image_large: '/images/category_styles/formal_large2.svg',
    image_mobile: '/images/category_styles/formal_mobile2.png',
  },
  {
    id: 2,
    style: 'Party',
    image_large: '/images/category_styles/party_large2.svg',
    image_mobile: '/images/category_styles/party_mobile2.png',
  },
  {
    id: 3,
    style: 'Gym',
    image_large: '/images/category_styles/gym_large2.svg',
    image_mobile: '/images/category_styles/gym_mobile_text.png',
  },
];

const CategoriesStyle = () => {
  const { windowSize, imageSize, setSmageSize } = useWindowSize();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const arrayRef = useRef([] as any);
  const [imageSize2, setSmageSize2] = useState({
    width: imageSize.width,
    height: imageSize.height,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setSmageSize2({
        width: imageSize.width,
        height: imageSize.height,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-11 xl:px-[6.25rem] ">
        <div className="bg-[#F0F0F0] pt-[40px] xl:pt-[70px] pb-[27px] xl:pb-[76px] rounded-[40px]">
          <h1 className="text-black font-intagral_cf font-bold text-[32px] xl:text-5xl text-center px-14  pb-16">
            Browse by dress style
          </h1>
          <div className="flex flex-row flex-wrap gap-4 lg:gap-5 px-4 lg:px-16 2xl:px-20 justify-center">
            <div className="flex flex-col md:flex-row gap-5 2xl:gap-[1.4vw]">
              <div className="relative 2xl:w-[28.28vw]">
                <Image
                  src={dressStyles[0].image_large}
                  alt=""
                  width={imageSize2.width}
                  height={289}
                  className="object-cover lg:w-auto lg:h-full hidden lg:block 2xl:w-[28.28vw]"
                />
                <Image
                  src={dressStyles[0].image_mobile}
                  alt=""
                  width={310}
                  height={289}
                  className="object-cover lg:hidden w-[80vw]"
                />
              </div>
              <div className="relative 2xl:w-[47.5vw]">
                <Image
                  src={dressStyles[1].image_large}
                  alt=""
                  width={imageSize2.width}
                  height={289}
                  className="object-cover lg:w-auto lg:h-full hidden lg:block 2xl:w-[47.5vw]"
                />
                <Image
                  src={dressStyles[1].image_mobile}
                  alt=""
                  width={310}
                  height={289}
                  className="object-cover  lg:hidden  w-[80vw]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="relative 2xl:w-[47.5vw]">
                <Image
                  src={dressStyles[2].image_large}
                  alt=""
                  // fill
                  width={imageSize2.width}
                  height={289}
                  className="object-cover lg:w-auto lg:block hidden 2xl:w-[47.5vw]"
                />
                <Image
                  src={dressStyles[2].image_mobile}
                  alt=""
                  // fill
                  width={310}
                  height={289}
                  className="object-cover lg:hidden  w-[80vw]"
                />
              </div>
              <div className="relative 2xl:w-[28.28vw]">
                <Image
                  src={dressStyles[3].image_large}
                  alt=""
                  // fill
                  width={imageSize2.width}
                  height={289}
                  className="object-cover lg:w-auto lg:block hidden 2xl:w-[28.28vw]"
                />
                <Image
                  src={dressStyles[3].image_mobile}
                  alt=""
                  // fill
                  width={310}
                  height={289}
                  className="object-cover lg:hidden  w-[80vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesStyle;
