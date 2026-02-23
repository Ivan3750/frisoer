"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Tak for din booking! Vi kontakter dig snarest.");
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Book din tid
          </h1>
          <p className="text-muted-foreground text-lg">
            Vi glæder os til at byde dig velkommen i salonen.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-3xl p-10 shadow-sm">

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Fulde navn</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Telefon</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Vælg behandling</label>
              <select
                name="service"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Vælg...</option>
                <option>Dameklip</option>
                <option>Herreklip</option>
                <option>Balayage</option>
                <option>Highlights</option>
                <option>Bryllupsstyling</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Dato</label>
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-sm mb-2">Tidspunkt</label>
              <input
                type="time"
                name="time"
                required
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm mb-2">Ekstra besked (valgfrit)</label>
              <textarea
                name="message"
                rows={4}
                onChange={handleChange}
                className="border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center pt-6">
              <button
                type="submit"
                className="px-12 py-4 bg-primary text-primary-foreground rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition"
              >
                Bekræft booking
              </button>
            </div>

          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Tilbage til forsiden
          </Link>
        </div>

      </div>
    </section>
  );
}