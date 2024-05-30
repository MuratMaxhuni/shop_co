'use client';

import { useRouter } from 'next/navigation';
import { Button } from '.';
import ProductCard from './ProductCard';
import { SyntheticEvent } from 'react';

interface Props {
  newArrivals: Array<ProductType>;
  title: string;
  hideButton?: boolean;
}

const Products = ({ newArrivals, title, hideButton }: Props) => {
  const router = useRouter();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push('/category');
  };

  return (
    <section>
      <div className="flex flex-col  px-4 md:px-8 lg:px-11 xl:px-[6.25rem] ">
        <h1 className="text-black text-center font-intagral_cf text-[32px] xl:text-5xl font-bold pt-[50px] pb-8 xl:pt-[72px] xl:pb-[55px]">
          {title}
        </h1>
        <div className="flex flex-row gap-4 xl:gap-[1.4vw] 2xl:justify-between overflow-auto xl:overflow-hidden">
          {newArrivals.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              description={item.description}
              rating={item.rating}
              currentPrice={item.currentPrice}
              previousPrice={item.previousPrice}
              discount={item.discount}
              addStyle="w-[198px] h-[200px] lg:w-[22vw] lg:h-[22vw] xl:w-[20.5vw] xl:h-[20.7vw]"
            />
          ))}
        </div>
        {!hideButton && (
          <div className="flex items-center justify-center pt-6 pb-10 xl:pt-9 xl:pb-16">
            <Button
              backgroundColor="bg-white"
              width="w-full md:w-[218px]"
              padding=" xl:px-[45px] py-[13.5px] xl:py-[15px]"
              border="border border-black/10"
              onClick={handleClick}
            >
              View All
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
