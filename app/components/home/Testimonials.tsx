"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Youtuber",
    img: "/images/Group 9.png",
    rating: 4.5,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    img: "/images/Group 10.png",
    rating: 5.0,
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeas. Muy buen servicio!"
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Entrepreneur",
    img: "/images/Group 9.png",
    rating: 4.8,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  },
  // Cheksiz aylanish effekti uchun nusxalar qo'shamiz
  {
    id: 4,
    name: "John Doe",
    role: "Youtuber",
    img: "/images/Group 10.png",
    rating: 4.5,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 mb-16">
        <h2 className="text-4xl font-bold text-[#1E3333] max-w-md">
          What customers say about GREENMIND?
        </h2>
      </div>

      {/* Slider Konteyneri */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-8 px-10"
          animate={{ 
            x: ["0%", "-100%"] // O'ngdan chapga harakat
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[400px] md:min-w-[500px] bg-[#C1DCDC] rounded-[30px] p-10 flex flex-col justify-between"
            >
              <p className="text-[#1E3333] text-lg leading-relaxed mb-8 italic">
                “{item.text}”
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E3333] text-xl">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <AiFillStar className="text-yellow-500" />
                  <span className="font-bold">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Figma'dagi bezak nuqtalar */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-10 h-3 bg-[#1E3333] rounded-full" />
        <div className="w-3 h-3 bg-gray-300 rounded-full" />
        <div className="w-3 h-3 bg-gray-300 rounded-full" />
      </div>
    </section>
  );
}