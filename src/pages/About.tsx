import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Award, Users, Leaf } from "lucide-react";

const About = () => {
  const testimonials = [
    {
      name: "María González",
      rating: 5,
      comment: "Una experiencia increíble! El trekking superó todas mis expectativas. Guías profesionales y paisajes espectaculares.",
      tour: "Trekking Sierra Nevada",
    },
    {
      name: "Roberto Silva",
      rating: 5,
      comment: "El tour de bodegas fue perfecto. La selección de vinos y el maridaje fueron excepcionales. Totalmente recomendado.",
      tour: "Ruta de Bodegas",
    },
    {
      name: "Ana Martínez",
      rating: 5,
      comment: "Llevamos a toda la familia al rafting y fue una aventura inolvidable. Muy seguro y divertido para todas las edades.",
      tour: "Canotaje Aventura",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Experiencia Profesional",
      description: "Guías certificados con años de experiencia en turismo outdoor y conocimiento profundo de la región.",
    },
    {
      icon: Leaf,
      title: "Turismo Sostenible",
      description: "Comprometidos con la conservación del medio ambiente y el desarrollo de las comunidades locales.",
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description: "Experiencias personalizadas con grupos pequeños para garantizar atención de calidad y seguridad.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-muted-foreground">
              Conectando personas con la naturaleza desde 2015
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TrekValle Adventures nació del amor por las montañas y la pasión por compartir la belleza natural de nuestra región. 
                Fundada en 2015 por un grupo de guías de montaña y amantes del ecoturismo, comenzamos con pequeñas expediciones 
                para compartir los tesoros escondidos del valle andino.
              </p>
              <p>
                Con el tiempo, nuestra familia creció. Hoy somos un equipo de profesionales certificados dedicados a ofrecer 
                experiencias auténticas que combinan aventura, cultura y gastronomía local. Cada recorrido está diseñado con 
                cuidado para garantizar no solo la diversión y seguridad, sino también el respeto por el medio ambiente y las 
                comunidades que nos acogen.
              </p>
              <p>
                Nos enorgullece haber guiado a más de 5,000 aventureros de todo el mundo, ayudándoles a descubrir la magia 
                de nuestras montañas, cascadas, viñedos y ríos. Cada tour es una oportunidad para crear recuerdos inolvidables 
                y conexiones profundas con la naturaleza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.tour}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
