'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import useWindowSize from './hooks/use-windowsize';

interface Props {
  data: TestimonialType[];
}

const Carousel3 = ({ data }: Props) => {
  const { windowSize } = useWindowSize();
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const [scrollWidth, setScrollWidth] = useState(0);
  const [windowViewWidth, setWindowViewWidth] = useState(0);
  const carouselRef = useRef<HTMLImageElement | null>(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;

    let { width, height } = elem.getBoundingClientRect();

    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }

    setWindowViewWidth(windowSize.widthOfScreen);
    if (windowViewWidth > 765) {
      setScrollWidth(378);
    } else {
      setScrollWidth(420);
    }
  }, [windowSize.widthOfScreen]);

  return (
    <section>
      <div className="py-[184px] xl:py-[170px]">
        <div className="flex flex-row pb-6 xl:pb-10 justify-between">
          <h1 className="text-black font-intagral_cf text-[32px] leading-9 xl:text-5xl font-bold">
            Our happy customers
          </h1>
          <div className="flex flex-row space-x-4 items-end">
            <button
              type="button"
              disabled={currentImg === 0}
              onClick={() => setCurrentImg((prev) => prev - 1)}
              className={`w-fit h-fit
             ${currentImg === 0 && 'opacity-50'}`}
            >
              <Image
                src="/images/arrow_left.svg"
                alt=""
                width={24}
                height={24}
                className="object-contain "
              />
            </button>
            <button
              type="button"
              disabled={currentImg === data.length - 1}
              onClick={() => setCurrentImg((prev) => prev + 1)}
              className={`w-fit h-fit ${
                currentImg === data.length - 1 && 'opacity-50'
              }`}
            >
              <Image
                src="/images/arrow_right.svg"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row overflow-hidden relative w-full h-60">
          <div
            ref={carouselRef}
            style={{
              left: -currentImg * scrollWidth,
            }}
            className="w-full h-full absolute gap-5 flex transition-all duration-300 left-0"
          >
            {data.map((item) => (
              <TestimonialCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3;
