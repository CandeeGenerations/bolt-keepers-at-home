import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/product-detail';
import { products } from '@/lib/data';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}