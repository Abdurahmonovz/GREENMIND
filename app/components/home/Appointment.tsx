"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Appointment() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    const res = await fetch('/api/appointment', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Xabaringiz yuborildi! Tez orada boglanamiz ✅");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("Xatolik yuz berdi. Qaytadan urinib koring ❌");
    }
    setLoading(false);
  };

  return (
    <section className="py-24 px-10 md:px-20 bg-white">
      <div className="max-w-[1100px] mx-auto bg-[#2D3E33] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
       
        <div className="md:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get an <br /> Appointment
          </motion.h2>
          <p className="text-gray-300 text-lg">
            Sizga osimlik tanlashda yoki parvarish qilishda yordam kerakmi? Malumot qoldiring!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 bg-white p-12 md:p-20 space-y-6">
          <div className="space-y-4">
            <input 
              name="name" 
              type="text" 
              placeholder="Full Name" 
              required 
              className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-[#2D3E33] transition-all"
            />
            <input 
              name="phone" 
              type="text" 
              placeholder="Phone Number (+998 ...)" 
              required 
              className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-[#2D3E33] transition-all"
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={4}
              className="w-full bg-gray-100 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-[#2D3E33] transition-all"
            ></textarea>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full bg-[#2D3E33] text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
          
          {status && <p className="text-center font-medium text-green-700 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}