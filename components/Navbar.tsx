"use client";

import { menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import MailIcon from "./icons/MailIcon";
import Arrow_Down from "./icons/Arrow_Down";

const Navbar = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <header>
      <nav className="">
        {/* banner advertiser */}
        <div
          className={`${
            close ? "hidden" : ""
          } bg-black font-satoshi px-4 xl:px-[6.25rem] 2xl:px-[6.25vw] flex flex-row py-[.56vw]`}
        >
          <div className="relative flex flex-row justify-center items-center w-full">
            <div className="flex flex-row items-baseline">
              <p className="text-white/75 text-xs lg:text-sm py-[10px]">
                Sign up and get 20% off to your first order.
              </p>
              <Link href="/sign-up" className="text-white">
                <span className="text-xs lg:text-sm border-b-[1px] border-white">
                  Sign Up Now
                </span>
              </Link>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="absolute hidden sm:flex right-0"
            >
              <Image
                src="/images/Close_icon.svg"
                width={13}
                height={13}
                alt="close icon"
              />
            </button>
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row justify-between  px-4 xl:px-[6.25rem] 2xl:px-[6.25vw] py-5 xl:py-6 2xl:py-[1.67vw]">
          <div className="flex flex-row space-x-10 2xl:space-x-[3vw]">
            <Link href="/">
              <h1 className="font-intagral_cf font-bold text-[1.56rem] lg:text-[2rem] 2xl:text-5xl text-black">
                Shop.co
              </h1>
            </Link>
            <div className="flex flex-row items-center space-x-6 2xl:space-x-[2vw]">
              {menuItems.map((item) => (
                <Link
                  href={item.route}
                  key={item.label}
                  className="flex flex-row space-x-1"
                >
                  <span className="text-black text-base 2xl:text-lg font-normal font-satoshi">
                    {item.label}
                  </span>

                  {/* {item.rightIcon && ( */}
                  <div className="relative">
                    <Image
                      // src={item.rightIcon ? item.rightIcon : ''}
                      src="/images/down_arrow.svg"
                      alt="arrow down"
                      width={11.5}
                      height={6.5}
                    />
                    <Arrow_Down />
                  </div>
                </Link>
              ))}
            </div>
            <div className="relative flex  h-12 2xl:h-16 lg:w-[35vw] 2xl:w-[40vw] rounded-full ">
              <input
                id="search"
                type="text"
                placeholder="Search for products..."
                className="font-satoshi text-base 2xl:text-lg font-normal w-full bg-[#F0F0F0] pl-[3.25rem] rounded-full pt-3 2xl:pt-4 pb-[0.875rem] 2xl:pb-4 "
              />
              <div className="absolute left-0 pl-4 2xl:pl-5 py-3 2xl:py-5 flex items-center">
                {/* <Image
                src="/images/Search_icon.svg"
                alt="arrow down"
                width={24}
                height={24}
                sizes="(max-width: 768px) 100vw"
                className="object-contain"
              /> */}
                <SearchIcon opacity={0.4} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3.5 2xl:space-x-[1vw] ">
            <Link href="/cart">
              <Image
                src="/images/Cart_icon.svg"
                width={22}
                height={20}
                alt="cart icon"
              />
            </Link>
            <Link href="/user">
              <Image
                src="/images/User_icon.svg"
                width={20}
                height={20}
                alt="user icon"
              />
            </Link>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="flex lg:hidden flex-row px-4  h-6 py-6 justify-between items-center">
          <div className="flex flex-row space-x-[1.125rem]">
            <button
              type="button"
              // onClick={handleClose}
              // className="absolute hidden sm:flex right-0"
            >
              <Image
                src="/images/Hamburger_icon.svg"
                width={18}
                height={14}
                alt="close icon"
              />
            </button>
            <h1 className="font-intagral_cf font-bold text-[1.56rem] xl:text-[2rem] text-black">
              Shop.co
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <Link href="/search">
              <SearchIcon opacity={1} />
            </Link>
            <Link href="/cart">
              <Image
                src="/images/Cart_icon.svg"
                width={22}
                height={20}
                alt="cart icon"
              />
            </Link>
            <Link href="/user">
              <Image
                src="/images/User_icon.svg"
                width={20}
                height={20}
                alt="user icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
