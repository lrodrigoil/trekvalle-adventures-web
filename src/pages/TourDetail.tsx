import { useParams, Link, useNavigate } from "react-router-dom";
import { tours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  Calendar,
  ArrowLeft,
  User
} from "lucide-react";

const TourDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Recorrido no encontrado</h1>
          <Button asChild>
            <Link to="/tours">Ver todos los recorridos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Fácil: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Media: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Difícil: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  const handleBooking = () => {
    navigate("/contact", { state: { tourId: tour.id, tourName: tour.name } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="mb-4 text-white hover:text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
              <Badge className={difficultyColors[tour.difficulty]} >
                {tour.difficulty}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2">
                {tour.name}
              </h1>
              <p className="text-xl text-white/90">{tour.shortDescription}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <Card className="p-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duración</p>
                      <p className="font-semibold">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Dificultad</p>
                      <p className="font-semibold">{tour.difficulty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Precio</p>
                      <p className="font-semibold text-primary text-xl">${tour.price}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Itinerario</h2>
                <div className="space-y-3">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-20 font-semibold text-primary">
                        {item.time}
                      </div>
                      <div className="flex-1 pb-4 border-l-2 border-border pl-4">
                        <p className="text-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Qué Incluye</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Bring */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Qué Traer</h2>
                <ul className="space-y-2">
                  {tour.whatToBring.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card className="p-6 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-primary mb-2">${tour.price}</p>
                  <p className="text-sm text-muted-foreground">por persona</p>
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={handleBooking}
                >
                  Reservar Ahora
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Confirma tu reserva por WhatsApp o formulario
                </p>
              </Card>

              {/* Guide Info */}
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Tu Guía
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={tour.guide.photo}
                    alt={tour.guide.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{tour.guide.name}</p>
                    <p className="text-sm text-muted-foreground">{tour.guide.experience}</p>
                  </div>
                </div>
              </Card>

              {/* Available Dates */}
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Fechas Disponibles
                </h3>
                <div className="space-y-2">
                  {tour.availableDates.map((date, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded bg-muted/50"
                    >
                      <span className="text-sm">
                        {new Date(date).toLocaleDateString("es-ES", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;
