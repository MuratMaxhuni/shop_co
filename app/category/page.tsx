'use client';

import React, { useState } from 'react';
import Filters from './_component/Filters';
import CasualCollection from './_component/CasualCollection';
import Link from 'next/link';
import Modal from './_component/Modal';
// import { Modal } from '../@modal/(.)categorys/modal';

const casual: Array<ProductType> = [
  {
    id: 0,
    image: '/images/products/image_1.png',
    description: 'T-shirt with Tape Details',
    rating: 4.5,
    currentPrice: 120,
  },
  {
    id: 1,
    image: '/images/products/image_2.png',
    description: 'Skinny Fit Jeans',
    rating: 4.5,
    currentPrice: 240,
    previousPrice: 260,
    discount: -20,
  },
  {
    id: 2,
    image: '/images/products/image_3.png',
    description: 'Checkered Shirt',
    rating: 4.5,
    currentPrice: 180,
  },
  {
    id: 3,
    image: '/images/products/image_4.png',
    description: 'Sleeve Striped T-shirt',
    rating: 4.5,
    currentPrice: 130,
    previousPrice: 160,
    discount: -30,
  },
  {
    id: 5,
    image: '/images/products/image_5.png',
    description: 'Vertical Striped Shirt',
    rating: 5,
    currentPrice: 212,
    previousPrice: 232,
    discount: -20,
  },
  {
    id: 6,
    image: '/images/products/image_6.png',
    description: 'Courage Graphic T-shirt',
    rating: 4.0,
    currentPrice: 145,
  },
  {
    id: 7,
    image: '/images/products/image_7.png',
    description: 'Losse Fit Bermuda Shorts',
    rating: 3.0,
    currentPrice: 80,
  },
  {
    id: 8,
    image: '/images/products/image_8.png',
    description: 'Faded Skinny Jeans',
    rating: 4.5,
    currentPrice: 210,
  },
  {
    id: 9,
    image: '/images/product_detail/image_9.png',
    description: 'Polo with Contrast Trims',
    rating: 4,
    currentPrice: 212,
    previousPrice: 242,
    discount: -20,
  },
  // {
  //   id: 10,
  //   image: '/images/product_detail/image_10.png',
  //   description: 'Gradient Graphic T-shirt',
  //   rating: 3.5,
  //   currentPrice: 145,
  // },
  // {
  //   id: 11,
  //   image: '/images/product_detail/image_11.png',
  //   description: 'Polo with Tipping Details',
  //   rating: 4.5,
  //   currentPrice: 180,
  // },
  // {
  //   id: 12,
  //   image: '/images/product_detail/image_12.png',
  //   description: 'Black Striped T-shirt',
  //   rating: 5,
  //   currentPrice: 120,
  //   previousPrice: 160,
  //   discount: -30,
  // },
];

export default function CategoryPage() {
  const [showModal, setShowModal] = useState(false);
  // const [value, setValue] = React.useState({ min: 0, max: 100 });

  // const handleChange = ({ min, max }: { min: number; max: number }) => {
  //   console.log(`min = ${min}, max = ${max}`);
  // };
  // const handleModal = (value: any) => {
  //   console.log('handleModal: ', value);
  //   setShowModal(!value);
  // };

  console.log('show Modal ', showModal);
  return (
    <section className="mb-[155px] xl:mb-[170px]">
      <div className="px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw] ">
        <div className="flex flex-row gap-5">
          <div className="hidden lg:block">
            <Filters />
            {/* <div>
              <Link href="/category">Open modal</Link>
            </div> */}
          </div>
          <CasualCollection
            casuals={casual}
            setModal={setShowModal}
            valueModal={showModal}
          />
          {/* <Modal>adfa;dsjfa;dsfasdfjdsa;j</Modal> */}
          {/* {showModal && ( */}
          <Modal showModal={showModal} setModal={setShowModal}>
            <div className="max-h-[90vh] overflow-y-auto w-full">
              <Filters showModal={showModal} setModal={setShowModal} />
            </div>
          </Modal>
          {/* )} */}
        </div>
      </div>
    </section>
  );
}
