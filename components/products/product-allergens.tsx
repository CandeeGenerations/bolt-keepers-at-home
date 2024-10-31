import { Badge } from "@/components/ui/badge";

interface ProductAllergensProps {
  allergens: string[];
}

export function ProductAllergens({ allergens }: ProductAllergensProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium">Contains allergens:</p>
      <div className="flex gap-2 flex-wrap">
        {allergens.map((allergen) => (
          <Badge key={allergen} variant="secondary">
            {allergen}
          </Badge>
        ))}
      </div>
    </div>
  );
}