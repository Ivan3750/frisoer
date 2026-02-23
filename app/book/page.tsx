"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (!selectedDate) return;
    const fetchTimes = async () => {
      setLoading(true);
      const dateStr = selectedDate.toISOString().split("T")[0];
      try {
        const res = await fetch(`/api/availability?date=${dateStr}`);
        const data = await res.json();
        setAvailableTimes(data.times);
        setSelectedTime("");
      } catch {
        setAvailableTimes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTimes();
  }, [selectedDate]);

  const validateFields = () => {
    const newErrors = { name: "", phone: "", date: "", time: "" };
    let valid = true;

    if (!name.trim()) {
      newErrors.name = "Navn er påkrævet";
      valid = false;
    }
    if (!phone.trim() || !/^\+?\d{7,15}$/.test(phone)) {
      newErrors.phone = "Gyldigt telefonnummer er påkrævet";
      valid = false;
    }
    if (!selectedDate) {
      newErrors.date = "Vælg venligst en dato";
      valid = false;
    }
    if (!selectedTime) {
      newErrors.time = "Vælg venligst et tidspunkt";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;
    try {
      setBookingSuccess(true);
    } catch {
      setBookingSuccess(false);
    } finally {
      setShowModal(true);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center  py-24">
      <div className="w-full max-w-lg px-6">
        <h1 className="text-4xl font-semibold mb-12 text-center text-primary">
          Book din tid
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-8   space-y-6"
        >
          {/* Date picker */}
          <div>
            <label className="block mb-2 font-medium">Vælg dato</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText="Vælg dato"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              dateFormat="yyyy-MM-dd"
            />
            {errors.date && <p className="text-red-500 mt-1">{errors.date}</p>}
          </div>

          {/* Time picker */}
          {selectedDate && (
            <div>
              <label className="block mb-2 font-medium">Vælg tidspunkt</label>
              {loading ? (
                <p className="text-muted-foreground">
                  Indlæser tilgængelige tider...
                </p>
              ) : availableTimes.length === 0 ? (
                <p className="text-red-500">
                  Ingen ledige tider den valgte dag
                </p>
              ) : (
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Vælg tidspunkt</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              )}
              {errors.time && <p className="text-red-500 mt-1">{errors.time}</p>}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Navn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Telefonnummer</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Optional comment */}
          <div>
            <label className="block mb-2 font-medium">Kommentar (valgfri)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition"
          >
            Bekræft booking
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm relative text-center">
              {bookingSuccess ? (
                <div className="space-y-4">
                  <svg
                    className="w-16 h-16 mx-auto text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  <h2 className="text-2xl font-semibold">Booking succesfuld!</h2>
                  <p>
                    Din booking for {selectedDate?.toLocaleDateString()} kl.{" "}
                    {selectedTime} er bekræftet.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <svg
                    className="w-16 h-16 mx-auto text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <h2 className="text-2xl font-semibold">Booking mislykkedes!</h2>
                  <p>Prøv venligst igen senere.</p>
                </div>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition"
              >
                Luk
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}