"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const [isActive, setIsActive] = useState(false);
  
  // Nechta mahsulot ko'rinib turishini boshqarish uchun state
  const [visibleCount, setVisibleCount] = useState(3);

  const handleButtonClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  // Mahsulotlar ro'yxatini kengaytiramiz (jami 6 ta yoki undan ko'p)
  const allPlants = [
    { id: 1, name: "Natural Plants", price: "P 1,400.00", img: "/images/Frame 9.png" },
    { id: 2, name: "Artificial Plants", price: "P 900.00", img: "/images/Frame 8.png" },
    { id: 3, name: "Artificial Plants", price: "P 3,500.00", img: "/images/Frame 7.png" },
    // Keyingi 3 ta rasm (Figma dizayni bo'yicha yoki yangi ID bilan)
    { id: 4, name: "Indoor Bamboo", price: "P 1,200.00", img: "/images/Frame 9.png" },
    { id: 5, name: "Office Cactus", price: "P 450.00", img: "/images/Frame 8.png" },
    { id: 6, name: "Home Fern", price: "P 2,100.00", img: "/images/Frame 7.png" },
  ];

  // Faqat kerakli miqdordagi mahsulotlarni qirqib olamiz
  const visiblePlants = allPlants.slice(0, visibleCount);

  const handleSeeMore = () => {
    // Agar hali mahsulot qolgan bo'lsa, yana 3 tasini ko'rsatamiz
    if (visibleCount < allPlants.length) {
      setVisibleCount(prev => prev + 3);
    } else {
      // Agar hamma rasm chiqib bo'lgan bo'lsa, yana 3 taga qaytarish (ixtiyoriy)
      setVisibleCount(3);
    }
  };

  return (
    <div className="w-full">
      {/* --- HERO SECTION (O'zgarishsiz qoladi) --- */}
      <section className="relative bg-[#C1DCDC] rounded-[40px] mx-5 md:mx-10 p-10 md:p-20 flex flex-col md:flex-row items-center overflow-hidden">
        <div className="flex-1 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-[#1E3333] leading-tight"
          >
            Buy your <br /> dream plants
          </motion.h1>
          
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-3xl font-bold text-[#1E3333]">50+</p>
              <p className="text-gray-600">Plant Species</p>
            </div>
            <div className="border-l border-gray-400 h-12"></div>
            <div>
              <p className="text-3xl font-bold text-[#1E3333]">100+</p>
              <p className="text-gray-600">Customers</p>
            </div>
          </div>

          <div className="mt-10 relative max-w-md p-[2px] rounded-2xl overflow-hidden">
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-[-200%]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    className="w-full h-full bg-[conic-gradient(from_0deg,#4285F4,#8AB4F8,#34A853,#FBBC05,#EA4335,#4285F4)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="relative bg-white rounded-[15px] flex items-center">
              <input 
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                type="text" 
                placeholder="What are you looking for?"
                className="w-full py-4 px-6 rounded-2xl outline-none bg-transparent"
              />
              <button 
                onClick={handleButtonClick}
                className="absolute right-2 top-2 bg-[#C1DCDC] text-[#1E3333] p-3 rounded-xl cursor-pointer active:scale-95 transition-all"
              >
                <FiSearch />
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mt-10 md:mt-0 relative"
        >
          <Image 
            src="/images/Screenshot 2026-04-09 at 18.00.41.png" 
            alt='img' 
            width={900} 
            height={600}
            className='pt-16'
            priority
          />
        </motion.div>
      </section>

      {/* --- BEST SELLING PLANTS SECTION --- */}
      <section className="px-10 md:px-20 py-24 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4">
          <h2 className="text-4xl font-bold text-[#1E3333] leading-tight mb-4">
            Best Selling Plants
          </h2>
          <p className="text-gray-500 mb-8">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <motion.button 
            onClick={handleSeeMore}
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 bg-[#C1DCDC] px-6 py-3 rounded-xl font-medium text-[#1E3333] cursor-pointer hover:bg-[#b0cfcf] transition-all"
          >
            {visibleCount < allPlants.length ? "See more" : "Show less"} <FiArrowRight />
          </motion.button>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {visiblePlants.map((plant) => (
              <motion.div 
                key={plant.id}
                layout // Elementlar o'rni almashganda silliq harakatlanadi
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -15 }}
                className="group"
              >
                <div className="relative bg-[#F5F5F5] rounded-[40px] overflow-hidden aspect-[3/4] flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full p-8"
                  >
                    <Image 
                      src={plant.img} 
                      alt={plant.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-[#1E3333] group-hover:text-green-600 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-gray-500 text-lg mt-1">{plant.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}