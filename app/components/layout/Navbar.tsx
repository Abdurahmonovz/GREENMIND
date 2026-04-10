"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { BsPerson, BsFilterRight } from 'react-icons/bs';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Namuna uchun bo'sh savat holati (keyinchalik buni Context yoki Redux ga ulanadi)
  const cartItems = []; 

  return (
    <>
      <nav className="flex justify-between items-center py-6 px-10 md:px-20 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-[80px]">
          {/* LOGO */}
          <div className="text-2xl font-bold tracking-wider">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#1E3333]"
            >
              GREENMIND
            </motion.h1>
          </div>
          
          {/* MENU */}
          <div className="hidden md:flex gap-10 text-gray-500 font-sans">
            <Link href="/" className="hover:text-[#1E3333] transition text-black font-bold">Home</Link>
            <Link href="/products" className="hover:text-[#1E3333] transition">Products</Link>
            <Link href="#appointment-section" className="hover:text-[#1E3333] transition">Contacts</Link>
          </div>
        </div>

        {/* O'NG TOMON */}
        <div className="flex items-center gap-8 text-gray-700">
          {/* Savat Ikonkasi */}
          <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(true)}>
            <FiShoppingCart className="text-2xl group-hover:text-green-600 transition" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartItems.length}
            </span>
          </div>

          <FiMenu className="text-2xl md:hidden cursor-pointer" />
          <BsPerson className="text-2xl cursor-pointer hover:text-green-600 transition" />
          <p className='w-[1px] h-5 bg-gray-300'></p>
          <BsFilterRight className="text-2xl cursor-pointer hover:text-green-600 transition" />
        </div>
      </nav>

      {/* --- SIDEBAR CART OVERLAY --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Orqa fon (Blur) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Savat paneli */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-[#1E3333]">Your Cart</h2>
                <FiX 
                  className="text-3xl cursor-pointer hover:rotate-90 transition-all" 
                  onClick={() => setIsCartOpen(false)} 
                />
              </div>

              {/* Savat mazmuni */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                {cartItems.length === 0 ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiShoppingCart className="text-4xl text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg mb-8">Your cart is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="bg-[#1E3333] text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition"
                    >
                      Return to Shop
                    </button>
                  </motion.div>
                ) : (
                  <div className="w-full">
                    {/* Mahsulotlar ro'yxati shu yerda chiqadi */}
                  </div>
                )}
              </div>

              {/* Pastki qism (Checkout) */}
              {cartItems.length > 0 && (
                <div className="border-t pt-6">
                  <div className="flex justify-between text-xl font-bold mb-6">
                    <span>Subtotal:</span>
                    <span>P 0.00</span>
                  </div>
                  <button className="w-full bg-[#1E3333] text-white py-4 rounded-xl font-bold text-lg">
                    Checkout Now
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}