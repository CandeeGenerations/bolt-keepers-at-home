import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSearch } from "@/components/products/product-search";

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground">
            Browse our selection of freshly baked goods, made with love every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          <ProductFilters />
          <div className="space-y-6">
            <ProductSearch />
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}