"use client";
import { motion } from 'framer-motion';
import { FiTruck, FiPhoneCall, FiBox } from 'react-icons/fi';

export default function AboutUs() {
  const handleCall = () => {
    // Raqamni shu yerda yozamiz, lekin UI da ko'rinmaydi
    window.location.href = "tel:+998937188885";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutData = [
    {
      id: "categories",
      icon: <FiBox className="text-3xl" />,
      title: "Large Assortment",
      desc: "We offer many different types of products with fewer variations.",
      action: () => scrollToSection('categories-section') // Kategoriyalar bo'limiga
    },
    {
      id: "shipping",
      icon: <FiTruck className="text-3xl" />,
      title: "Fast & Free Shipping",
      desc: "4-day or less delivery time, free shipping and expedited options.",
      action: () => scrollToSection('best-selling-section') // Mahsulotlar bo'limiga
    },
    {
      id: "support",
      icon: <FiPhoneCall className="text-3xl" />,
      title: "24/7 Support",
      desc: "Answers to any business related inquiry 24/7 and in real-time.",
      action: handleCall // Telefon qilish funksiyasi
    }
  ];

  return (
    <section id="about-section" className="px-10 md:px-20 py-24 bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#1E3333]"
        >
          About us
        </motion.h2>
        <p className="text-gray-500 mt-4 font-sans">Order now and appreciate the beauty of nature</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {aboutData.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={item.action} // Bosilganda tegishli amal bajariladi
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 bg-[#C1DCDC] rounded-full flex items-center justify-center text-[#1E3333] mb-6 group-hover:bg-[#1E3333] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-bold text-[#1E3333] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-[280px]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}