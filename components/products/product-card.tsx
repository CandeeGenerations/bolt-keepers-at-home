"use client";

import { Product } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden group">
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
            <h3 className="font-semibold text-lg hover:text-primary">
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
  );
}