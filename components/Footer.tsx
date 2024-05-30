import { footerLinks, payment_methods, socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Subscription } from '.';

const Footer = () => {
  return (
    <section className="relative bottom-0 left-0 w-full bg-[#F0F0F0]">
      <div className="relative">
        <div className="absolute left-0 -top-[100px] w-full">
          <Subscription />
        </div>
        <div className="flex flex-col px-4 xl:px-[6.25rem] 2xl:px-[6.25vw] pb-[77px] xl:pb-[88px] pt-[190px] md:pt-[92px] xl:pt-[140px]">
          <div className="flex flex-col lg:flex-row border-b-[1px] border-black/10 items-start lg:justify-between lg:items-baseline xl:pb-[50px] ">
            <div className="flex flex-col md:flex-row lg:flex-col pt-8 pb-6 xl:pt-0 xl:pb-0 xl:mr-16 max-w-[357px] md:max-w-[100%] lg:max-w-[248px]">
              <div className="md:w-[50%] lg:w-auto">
                <h1 className="font-intagral_cf font-bold text-[28px] lg:text-[2rem] 2xl:text-5xl text-black ">
                  Shop.co
                </h1>
                <p className="text-black/60 font-satoshi text-sm font-normal   leading-5 xl:leading-[22px] pt-[14px] pb-5 xl:pt-[25px] lx:pb-[35px]">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>
              <div className="flex flex-row space-x-3 md:w-[50%] lg:w-auto md:items-center md:justify-end lg:justify-normal">
                {socials.map((item) => (
                  <Link href={item.url} key={item.title}>
                    <Image
                      src={item.logo}
                      width={28}
                      height={28}
                      alt={item.title}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-6 lg:gap-x-[5.8vw] xl:gap-x-[7.8vw] xl:gap-y-0 md:grid-rows-1 md:grid-cols-4 pb-10 lg:pb-0 w-[100%] lg:w-auto">
              {footerLinks.map((item) => (
                <div className="flex flex-col space-y-4 xl:space-y-[26px]">
                  <h3 className="text-black uppercase font-satoshi text-sm font-medium leading-[18px] tracking-[3px]">
                    {item.title}
                  </h3>
                  <div className="flex flex-col space-y-4 xl:space-y-[17px]">
                    {item.links.map((link) => (
                      <Link href={link.url}>
                        <h4 className="text-black/60 font-satoshi text-sm font-normal leading-[16px]">
                          {link.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-between xl:pt-5">
            <p className="text-black/60 font-satoshi text-sm font-normal py-4 xl:py-0 ">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex flex-row space-x-[10px] xl:space-x-3">
              {payment_methods.map((item) => (
                <div
                  key={item.title}
                  className="relative w-[40px] h-[25px]  xl:w-[46px] xl:h-[30px]"
                >
                  <Image
                    src={item.logo}
                    // width={40}
                    // height={25}
                    fill
                    alt={item.title}
                    className=" object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
