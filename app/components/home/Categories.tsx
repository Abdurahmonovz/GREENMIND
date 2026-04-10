"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: "Natural Plants",
    img: "/images/Frame 36.png",
    hasDetail: false
  },
  {
    id: 2,
    name: "Plant Accessories",
    img: "/images/Frame 38.png",
    desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    hasDetail: true
  },
  {
    id: 3,
    name: "Artificial Plants",
    img: "/images/Frame 37.png",
    hasDetail: false
  }
];

export default function Categories() {
  return (
    <section id="categories-section" className="relative py-24 bg-white overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-[#1E3333]">Categories</h2>
        <p className="text-gray-500 mt-2">Find what you are looking for </p>
      </div>

      {/* FIGMA BACKGROUND STRIP (Orqa fondagi yashil chiziq) */}
      {/* top holatini va balandligini kartalarga mosladik */}
      <div className="absolute top-[45%] left-0 w-full h-[540px] bg-[#C1DCDC] z-0" />

      {/* CARDS CONTAINER */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10 relative z-10">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            // index === 1 (o'rtadagi karta) pastroqda bo'lishi uchun mt-12 beramiz
            // index 0 va 2 (chetdagi kartalar) tepada turishi uchun mt-0 beramiz
            className={`flex flex-col items-center ${index === 1 ? 'mt-16' : 'mt-0'}`}
          >
            {/* IMAGE CARD */}
            <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden shadow-lg mb-6 bg-white">
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <h3 className="text-xl font-bold text-[#1E3333] mb-2">{cat.name} </h3>
            
            {cat.hasDetail && (
              <div className="text-center flex flex-col items-center">
                <p className="text-[#1E1E1E] text-sm mb-6 max-w-[250px]">
                  {cat.desc} 
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center cursor-pointer gap-2 bg-white text-[#1E3333] px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all"
                >
                  Explore <FiArrowRight /> 
                </motion.button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}