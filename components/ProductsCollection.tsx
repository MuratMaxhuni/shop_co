import { Products } from '.';

const newArrivals: Array<ProductType> = [
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
];

const topSelling: Array<ProductType> = [
  {
    id: 0,
    image: '/images/products/image_5.png',
    description: 'Vertical Striped Shirt',
    rating: 5,
    currentPrice: 212,
    previousPrice: 232,
    discount: -20,
  },
  {
    id: 1,
    image: '/images/products/image_6.png',
    description: 'Courage Graphic T-shirt',
    rating: 4.0,
    currentPrice: 145,
  },
  {
    id: 2,
    image: '/images/products/image_7.png',
    description: 'Losse Fit Bermuda Shorts',
    rating: 3.0,
    currentPrice: 80,
  },
  {
    id: 3,
    image: '/images/products/image_8.png',
    description: 'Faded Skinny Jeans',
    rating: 4.5,
    currentPrice: 210,
  },
];

const ProductsCollection = () => {
  return (
    <section>
      <Products
        newArrivals={newArrivals}
        title="New Arrivals"
        key={'new arrivals'}
      />
      <div className="w-full  px-4 md:px-8 lg:px-11 xl:px-[6.25rem]">
        <hr className="h-[1px] w-full bg-black/10  " />
      </div>
      <Products
        newArrivals={topSelling}
        title="Top Selling"
        key={'Top Selling'}
      />
    </section>
  );
};

export default ProductsCollection;
