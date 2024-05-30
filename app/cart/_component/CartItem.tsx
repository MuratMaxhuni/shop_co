import { Button } from '@/components';
import { useCartStore } from '@/stores/useCartStore';
import Image from 'next/image';
import React from 'react';

interface Props {
  product: ProductDetailType;
}

const CartItem = ({ product }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="flex flex-row justify-between border-b border-b-black pb-6">
      <div className="flex flex-row space-x-[14px] xl:space-x-4">
        <div className="relative w-[99px] h-[99px] lg:w-[124px] lg:h-[124px]">
          <Image
            src="/images/products/image_3.png"
            //   width={124}
            //   height={124}
            fill
            className="object-fill "
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[96px] md:w-[62px] lg:w-auto">
            <h3 className="text-black font-satoshi text-base xl:text-xl font-bold overflow-x-visible text-nowrap">
              Gradient Graphic T-shirt
            </h3>
            <h4 className="flex flex-row text-black font-satoshi font-normal text-xs lg:text-sm xl:pt-[2px] xl:pb-1">
              Size: <span className="text-black/60 ml-1">Large</span>
            </h4>
            <h4 className="flex flex-row text-black font-satoshi font-normal text-xs lg:text-sm">
              Color: <span className="text-black/60 ml-1">White</span>
            </h4>
          </div>
          <p className="text-black font-satoshi text-xl xl:text-2xl font-bold">
            $145
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div>
          <Image
            src="/images/delete_icon.svg"
            width={18}
            height={19}
            alt=""
            onClick={() => removeFromCart(product)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row h-[31px] lg:h-[44px] ">
          <Button
            backgroundColor="bg-[#F0F0F0]"
            width="w-[52px] md:w-[65px] lg:w-[59px] "
            border="rounded-r-none"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/images/minus_icon.svg"
                width={15}
                height={15}
                alt=""
              />
            </div>
          </Button>
          <div className="bg-[#F0F0F0]  items-center flex justify-center">
            <span className="text-black font-satoshi text-sm  font-medium">
              {totalItems}
            </span>
          </div>
          <Button
            backgroundColor="bg-[#F0F0F0]"
            width="w-[52px] md:w-[65px] lg:w-[59px] "
            border="rounded-l-none"
            padding="py-0"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/images/plus_icon.svg"
                width={15}
                height={15}
                alt=""
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
