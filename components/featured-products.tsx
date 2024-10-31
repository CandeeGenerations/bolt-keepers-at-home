"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  // TODO: Replace with actual API call
  useEffect(() => {
    setProducts([
      {
        id: "1",
        name: "Sourdough Bread",
        description: "Traditional sourdough bread made with organic flour",
        price: 8.99,
        allergens: ["wheat", "gluten"],
        quantity: 10,
        tags: ["bread", "organic", "featured"],
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
        tags: ["pastries", "chocolate", "featured"],
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
        tags: ["cakes", "featured"],
        enabled: true,
        featured: true,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <Link href={`/products/${product.id}`}>
            <CardContent className="p-0 relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.quantity <= 5 && (
                <Badge className="absolute top-2 right-2 bg-red-500">
                  Low Stock: {product.quantity} left
                </Badge>
              )}
            </CardContent>
          </Link>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <div className="flex justify-between items-start w-full">
              <Link href={`/products/${product.id}`} className="flex-1">
                <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </Link>
              <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.allergens.map((allergen) => (
                <Badge key={allergen} variant="secondary">
                  {allergen}
                </Badge>
              ))}
            </div>
            <Button 
              className="w-full mt-2"
              onClick={() => addItem(product)}
            >
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}