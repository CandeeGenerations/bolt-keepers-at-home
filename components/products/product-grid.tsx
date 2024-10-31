"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { ProductCard } from "./product-card";
import { useSearchParams } from "next/navigation";

// Mock database - in a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Sourdough Bread",
    description: "Traditional sourdough bread made with organic flour",
    price: 8.99,
    allergens: ["wheat", "gluten"],
    quantity: 10,
    tags: ["bread", "organic"],
    enabled: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with dark chocolate",
    price: 4.99,
    allergens: ["wheat", "dairy", "eggs"],
    quantity: 15,
    tags: ["pastries", "chocolate"],
    enabled: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting",
    price: 24.99,
    allergens: ["wheat", "dairy", "eggs", "nuts"],
    quantity: 5,
    tags: ["cakes"],
    enabled: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Baguette",
    description: "Classic French baguette with crispy crust",
    price: 6.99,
    allergens: ["wheat", "gluten"],
    quantity: 20,
    tags: ["bread"],
    enabled: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Cinnamon Roll",
    description: "Soft and gooey cinnamon roll with cream cheese frosting",
    price: 5.99,
    allergens: ["wheat", "dairy", "eggs"],
    quantity: 12,
    tags: ["pastries"],
    enabled: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    
    // Get filter parameters
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.toLowerCase();
    const allergens = searchParams.getAll("allergen");

    // Filter products based on search parameters
    let filteredProducts = [...mockProducts];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.tags.includes(category)
      );
    }

    // Filter by search term
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
      );
    }

    // Filter by allergens (show products that DON'T contain the selected allergens)
    if (allergens.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        !allergens.some(allergen => product.allergens.includes(allergen))
      );
    }

    // Simulate API delay
    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[400px] rounded-lg bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}