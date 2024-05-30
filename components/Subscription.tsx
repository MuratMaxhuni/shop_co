'use client';

import InputComponent from './InputComponent';
import MailIcon from './icons/MailIcon';
import { Button } from '.';

const Subscription = () => {
  return (
    <section className="px-4  xl:px-[6.25rem] 2xl:px-[6.25vw]">
      <div className="bg-black pt-8 px-6 pb-7 md:px-10 xl:px-16 xl:py-[43px] rounded-[20px] flex flex-col md:flex-row justify-between items-center space-y-8 xl:space-y-0">
        <h1 className="uppercase text-white font-intagral_cf text-[32px] md:text-[2.8vw] leading-[35px]  lg:leading-[3.13vw] max-w-[450px] md:max-w-[38.8vw] lg:max-w-[38.2vw] font-bold">
          Stay upto date about our latest offers
        </h1>
        <form
          id="subscription"
          onSubmit={() => {}}
          className="flex flex-col w-full md:w-fit gap-3 xl:gap-[14px] 2xl:w-[24.24vw]"
        >
          <InputComponent
            type="text"
            placeholder="Enter your email address"
            width="230px"
            backgroundColor="black"
            styles="h-12 2xl:h-16 w-full md:w-[311px] lg:w-[349px] 2xl:w-[24.24vw]"
            icon={<MailIcon opacity={0.4} /> || ''}
          />

          <Button
            backgroundColor="bg-white"
            width="w-full md:w-[311px] lg:w-[349px] 2xl:w-[24.24vw]"
            height="h-12 2xl:h-16"
          >
            <span className="text-black font-satoshi text-sm xl:text-base font-medium">
              Subscribe to Newsletter
            </span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
