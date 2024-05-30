'use client';

import { Button } from '@/components';
import InputComponent from '@/components/InputComponent';
import ArrowRightBold from '@/components/icons/ArrowRightBold';
import PromoIcon from '@/components/icons/PromoIcon';
import Image from 'next/image';
import React from 'react';
import CartItem from './CartItem';
import { useCartStore } from '@/stores/useCartStore';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <section>
      <div className="mb-[155px]  px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw] space-y-5 xl:space-y-6">
        <h1 className="font-intagral_cf text-black text-[32px] font-bold xl:text-[42px]">
          Your Cart
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between  space-y-5 md:space-y-0">
          <div className="border border-black rounded-[20px] p-[14px] xl:px-6 xl:py-5 md:w-[50%] lg:w-[58%] space-y-6">
            {cart.map((item) => (
              <CartItem product={item} key={item.id} />
            ))}
            {cart.length === 0 ? (
              <p className="font-satoshi text-black font-medium text-lg">
                There's no product in the Cart
              </p>
            ) : (
              ''
            )}
            {/* First Item */}
            {/* Second Item */}
            {/* <CartItem /> */}
            {/* Third Item */}
            {/* <CartItem /> */}
          </div>
          {/* Order Summary */}
          <div className="border border-black rounded-[20px] p-5 xl:px-6 xl:pt-5 xl:pb-[33px]  md:w-[48%] lg:w-2/5 space-y-4 xl:space-y-6">
            <h2 className="text-black font-satoshi text-xl xl:text-2xl font-bold">
              Order Summary
            </h2>
            <ul className="text-black font-satoshi font-normal text-base xl:text-xl space-y-5">
              <li className="flex flex-row justify-between">
                <span className="text-black/60">Subtotal</span>
                <span className="font-bold">$565</span>
              </li>
              <li className="flex flex-row justify-between">
                <span className="text-black/60">Discount (-20%)</span>
                <span className="font-bold text-[#FF3333]">-$113</span>
              </li>
              <li className="flex flex-row justify-between">
                <span className="text-black/60">Delivery Fee</span>
                <span className="font-bold">$15</span>
              </li>
            </ul>
            <p className="flex flex-row justify-between text-black font-satoshi ">
              <span className="font-normal text-base xl:text-xl">Total</span>
              <span className="font-bold text-xl xl:text-2xl">$467</span>
            </p>
            <div className="flex flex-col space-y-4 xl:space-y-6">
              <div className="flex flex-row space-x-3">
                <InputComponent
                  type="text"
                  placeholder="Add promo code"
                  width="230px"
                  backgroundColor="black"
                  styles="h-12 2xl:h-16 w-full md:w-[311px] lg:w-[349px] 2xl:w-[24.24vw]"
                  icon={
                    (
                      <PromoIcon
                        width="w-[17.5px] lg:w-[22px]"
                        height="h-[17.5px] lg:h-[22px]"
                        opacity={0.4}
                      />
                    ) || ''
                  }
                  iconStyles="py-[16px] xl:py-[14px] pl-[18px] "
                />
                <div>
                  <Button
                    backgroundColor="bg-black"
                    width="w-[88px] xl:w-[119px]"
                    height="h-12 2xl:h-16"
                  >
                    <span className="text-white font-satoshi text-sm xl:text-base font-medium">
                      Apply
                    </span>
                  </Button>
                </div>
              </div>
              <div>
                <Button
                  backgroundColor="bg-black"
                  width="w-full"
                  height="h-12 2xl:h-16"
                >
                  <div className="text-white font-satoshi text-sm xl:text-base font-medium flex flex-row items-center space-x-[14px]">
                    <span>Go to Checkout</span>
                    <ArrowRightBold
                      width="w-[13px] xl:w-[15px]"
                      height="h-[15px] xl:h-[18px]"
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
