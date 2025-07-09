import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  href: string;
  image: string;
  productCount: number;
  description?: string;
}

export default function CategoryCard({
  name,
  href,
  image,
  productCount,
  description,
}: CategoryCardProps) {
  return (
    <Link to={href} className="group block">
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-card">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{name}</h3>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              {description && (
                <p className="text-sm text-white/80 line-clamp-2">
                  {description}
                </p>
              )}

              <p className="text-xs text-white/70">
                {productCount} {productCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
