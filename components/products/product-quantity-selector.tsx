import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

interface ProductQuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  maxQuantity: number;
}

export function ProductQuantitySelector({
  quantity,
  setQuantity,
  maxQuantity,
}: ProductQuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="font-medium text-lg">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
        disabled={quantity >= maxQuantity}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}