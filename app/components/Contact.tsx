"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "27 89 61 00",
      href: "tel:27896100",
    },
    {
      icon: Mail,
      label: "Email",
      value: "email@gmail.com",
      href: "mailto:email@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "J Chr Juliussens Vej 9, st.th, 8700 Horsens",
      href: "https://maps.google.com/?q=J+Chr+Juliussens+Vej+9,+st.th,+8700+Horsens",
    },
  ];

  return (
    <section id="kontakt" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Kontakt
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Lad os tage en snak
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
              Har du spørgsmål om behandlinger, priser eller booking?
              Ring eller skriv — vi svarer hurtigt.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center transition group-hover:bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium whitespace-pre-line group-hover:text-primary transition">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-80 bg-muted">
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8956.599101552296!2d9.850497458370063!3d55.86006776466719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c6307a3c51a25%3A0x52246fde74b53209!2sFris%C3%B8r%20Vivian!5e0!3m2!1suk!2sdk!4v1771887379326!5m2!1suk!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
              />
            </div>

            {/* Hours */}
            <div className="p-8 rounded-3xl bg-muted">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Åbningstider</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Monday - Friday
                  </span>
                  <span>10:00 – 17:30</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Lørdag
                  </span>
                  <span>10:00 - 14:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Søndag
                  </span>
                  <span>Lukket</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;