import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHatIcon, LeafIcon, UtensilsCrossedIcon, HeartIcon } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: ChefHatIcon,
    title: "Artisanal Excellence",
    description: "Every item is crafted by hand with meticulous attention to detail and traditional techniques.",
  },
  {
    icon: LeafIcon,
    title: "Sustainable Ingredients",
    description: "We source organic, local ingredients to support our community and protect our environment.",
  },
  {
    icon: UtensilsCrossedIcon,
    title: "Time-Honored Recipes",
    description: "Our recipes have been perfected over generations, blending tradition with innovation.",
  },
  {
    icon: HeartIcon,
    title: "Community First",
    description: "We're more than a bakery - we're a gathering place for our community to share moments of joy.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting moments of joy through traditional baking since 1950
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1556217477-d325251ece38?q=80&w=2080"
                alt="Baker working"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">A Family Tradition</h2>
              <p className="text-muted-foreground">
                Keepers at Home began as a small family operation in 1950. What started as a passion for sharing homemade bread with neighbors has grown into a beloved community institution, while maintaining the same dedication to quality and craftsmanship.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to honor our heritage by using traditional baking methods and recipes passed down through generations, while embracing innovation to create new favorites for our community.
              </p>
              <Button asChild>
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <value.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}