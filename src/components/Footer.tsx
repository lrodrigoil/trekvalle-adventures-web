import { Link } from "react-router-dom";
import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Mountain className="h-6 w-6" />
              <span>TrekValle</span>
            </div>
            <p className="text-white/80 text-sm">
              Experiencias auténticas de turismo outdoor en el corazón de los Andes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-sand transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sand transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sand transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-sand transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-white/80 hover:text-sand transition-colors text-sm">
                  Recorridos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-sand transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-sand transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Experiencias</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Trekking y Montañismo</li>
              <li className="text-white/80">Rutas Gastronómicas</li>
              <li className="text-white/80">Ecoturismo</li>
              <li className="text-white/80">Deportes de Aventura</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Calle Principal 123, Valle Andino</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+54 9 261 555-1234</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@trekvalle.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {currentYear} TrekValle Adventures. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
