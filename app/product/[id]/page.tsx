import ProductDetail from '../_component/ProductDetail';
import ProductTabsDetail from '../_component/ProductTabsDetail';

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <ProductDetail />
      <ProductTabsDetail />
    </div>
  );
}
