import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CakeIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedProducts } from "@/components/featured-products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Keepers at Home</h1>
          <p className="text-xl md:text-2xl mb-8">Handcrafted with love, baked to perfection</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
              <Link href="/products">
                <ShoppingBagIcon className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-secondary/90 hover:bg-secondary">
              <Link href="/about">
                <CakeIcon className="mr-2 h-5 w-5" />
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Treats</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 md:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-shadow">
                <Link href={`/products?category=${category.slug}`}>
                  <CardContent className="p-0 relative aspect-square">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const categories = [
  {
    name: "Fresh Bread",
    slug: "bread",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070",
  },
  {
    name: "Sweet Pastries",
    slug: "pastries",
    image: "https://images.unsplash.com/photo-1558024920-b41e1887dc32?q=80&w=2070",
  },
  {
    name: "Special Cakes",
    slug: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089",
  },
];