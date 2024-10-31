import { Badge } from "@/components/ui/badge";

interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium">Categories:</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}