import { Tour } from "@/types/tour";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const difficultyColors = {
    Fácil: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Media: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Difícil: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-scale-in">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className={difficultyColors[tour.difficulty]}>
            {tour.difficulty}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="mb-2">
            {tour.category}
          </Badge>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>{tour.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-primary">
            <DollarSign className="h-4 w-4" />
            <span>${tour.price}</span>
          </div>
        </div>

        {/* Includes (badges) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.includes.slice(0, 2).map((item, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {item}
            </Badge>
          ))}
          {tour.includes.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{tour.includes.length - 2} más
            </Badge>
          )}
        </div>

        {/* CTA */}
        <Button variant="default" className="w-full" asChild>
          <Link to={`/tours/${tour.slug}`}>Ver Detalles</Link>
        </Button>
      </div>
    </div>
  );
};

export default TourCard;
