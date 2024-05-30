import React from 'react';
import ProductReviews from './ProductReviews';
import { Products } from '@/components';

const allProductReviews: Array<CardType> = [
  {
    card_type: 'review',
    id: '1',
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    name: 'Samantha D.',
    rating: 4.5,
    verified_customer: true,
    posted_date: 'August 14, 2023',
  },
  {
    card_type: 'review',
    id: '2',
    description:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    name: 'Alex M.',
    rating: 5,
    verified_customer: true,
    posted_date: 'August 15, 2023',
  },
  {
    card_type: 'review',
    id: '3',
    description:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
    name: 'Ethan R.',
    verified_customer: true,
    posted_date: 'August 16, 2023',
  },
  {
    card_type: 'review',
    id: '4',
    description:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    name: 'Olivia P',
    rating: 5,
    verified_customer: true,
    posted_date: 'August 17, 2023',
  },
  {
    card_type: 'review',
    id: '5',
    description:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    name: 'Liam K.',
    rating: 4.5,
    verified_customer: true,
    posted_date: 'August 18, 2023',
  },
  {
    card_type: 'review',
    id: '6',
    description:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
    name: 'Ava H.',
    verified_customer: true,
    posted_date: 'August 19, 2023',
  },
];

const youMightAlsoLike: Array<ProductType> = [
  {
    id: 0,
    image: '/images/product_detail/image_9.png',
    description: 'Polo with Contrast Trims',
    rating: 4,
    currentPrice: 212,
    previousPrice: 242,
    discount: -20,
  },
  {
    id: 1,
    image: '/images/product_detail/image_10.png',
    description: 'Gradient Graphic T-shirt',
    rating: 3.5,
    currentPrice: 145,
  },
  {
    id: 2,
    image: '/images/product_detail/image_11.png',
    description: 'Polo with Tipping Details',
    rating: 4.5,
    currentPrice: 180,
  },
  {
    id: 3,
    image: '/images/product_detail/image_12.png',
    description: 'Black Striped T-shirt',
    rating: 5,
    currentPrice: 120,
    previousPrice: 160,
    discount: -30,
  },
];

const ProductTabsDetail = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw]">
        <div className="flex flex-row border-b border-black/10 justify-between xl:justify-normal">
          <p className="xl:w-[414px] cursor-pointer text-black/60 text-center font-sans text-base xl:text-xl leadin-[22px] font-normal pb-5 xl:pb-6">
            Product Details
          </p>
          <p className="xl:w-[414px] cursor-pointer text-black text-center font-sans text-base xl:text-xl leadin-[22px] font-normal border-b-2 border-black pb-5 xl:pb-6">
            Rating & Reviews
          </p>
          <p className="xl:w-[414px] cursor-pointer text-black/60 text-center font-sans text-base xl:text-xl leadin-[22px] font-normal  pb-5 xl:pb-6">
            FAQs
          </p>
        </div>
        <ProductReviews data={allProductReviews} />
      </div>
      <div className="pb-[186px] xl:pb-[168px]">
        <Products
          title="You Might Also Like"
          newArrivals={youMightAlsoLike}
          hideButton={true}
        />
      </div>
    </section>
  );
};

export default ProductTabsDetail;
