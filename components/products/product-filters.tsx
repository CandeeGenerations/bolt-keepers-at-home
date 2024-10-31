"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: "bread", label: "Bread" },
  { id: "pastries", label: "Pastries" },
  { id: "cakes", label: "Cakes" },
];

const allergens = [
  { id: "gluten", label: "Gluten" },
  { id: "dairy", label: "Dairy" },
  { id: "eggs", label: "Eggs" },
  { id: "nuts", label: "Nuts" },
  { id: "soy", label: "Soy" },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedAllergens = searchParams.getAll("allergen");

  const updateFilters = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (type === "category") {
      if (params.get("category") === value) {
        params.delete("category");
      } else {
        params.set("category", value);
      }
    }

    if (type === "allergen") {
      const allergens = params.getAll("allergen");
      if (allergens.includes(value)) {
        params.delete("allergen");
        allergens.filter(a => a !== value).forEach(a => params.append("allergen", a));
      } else {
        params.append("allergen", value);
      }
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/products")}
          className="text-muted-foreground"
        >
          Clear all
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center gap-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategory === category.id}
                    onCheckedChange={() => updateFilters("category", category.id)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="allergens">
          <AccordionTrigger>Allergen Free</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {allergens.map((allergen) => (
                <div key={allergen.id} className="flex items-center gap-2">
                  <Checkbox
                    id={allergen.id}
                    checked={selectedAllergens.includes(allergen.id)}
                    onCheckedChange={() => updateFilters("allergen", allergen.id)}
                  />
                  <label
                    htmlFor={allergen.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {allergen.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {(selectedCategory || selectedAllergens.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-4">
          {selectedCategory && (
            <Badge variant="secondary" className="gap-1">
              {categories.find(c => c.id === selectedCategory)?.label}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => updateFilters("category", selectedCategory)}
              >
                ×
              </Button>
            </Badge>
          )}
          {selectedAllergens.map((allergen) => (
            <Badge key={allergen} variant="secondary" className="gap-1">
              {allergens.find(a => a.id === allergen)?.label}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => updateFilters("allergen", allergen)}
              >
                ×
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}