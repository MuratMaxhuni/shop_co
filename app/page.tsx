import {
  CategoriesStyle,
  Hero,
  Subscription,
  Testimonials,
} from '@/components';

import ProductsCollection from '@/components/ProductsCollection';

export default function Home() {
  return (
    //flex-1
    <main className="flex flex-col flex-1 h-[100vh]">
      <Hero />
      <ProductsCollection />
      <CategoriesStyle />
      <Testimonials />
      {/* <Subscription /> */}
    </main>
  );
}
