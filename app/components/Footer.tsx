
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Frisør Vivian
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Din personlige frisøroplevelse i hjertet af Horsens.
              Kvalitet, omsorg og stil.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Sider
            </h4>

            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Hjem
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Ydelser & Priser
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Kontakt
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-[2px]" />
                <span>Søndergade 12, 8700 Horsens</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+45 12 34 56 78</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                <Instagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 Frisør Vivian. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;