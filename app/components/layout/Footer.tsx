import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#C1DCDC] px-10 md:px-24 py-20 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-[#1E3333] mb-6">GREENMIND</h2>
          <p className="text-gray-500 mb-8">We help you find your dream plant</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#2D3E33] hover:text-white transition-all"><FaFacebookF /></div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#2D3E33] hover:text-white transition-all"><FaInstagram /></div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#2D3E33] hover:text-white transition-all"><FaTwitter /></div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#1E3333] mb-6">Information</h4>
          <ul className="space-y-4 text-gray-500">
            <li className="cursor-pointer hover:text-[#2D3E33]">About Us</li>
            <li className="cursor-pointer hover:text-[#2D3E33]">Products</li>
            <li className="cursor-pointer hover:text-[#2D3E33]">Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#1E3333] mb-6">Company</h4>
          <ul className="space-y-4 text-gray-500">
            <li className="cursor-pointer hover:text-[#2D3E33]">Community</li>
            <li className="cursor-pointer hover:text-[#2D3E33]">Our Story</li>
            <li className="cursor-pointer hover:text-[#2D3E33]">Special Offers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#1E3333] mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-500">
            <li>+998 93 718 88 85</li>
            <li>greenmind@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-gray-100 text-gray-400 text-sm">
        2026 all Right Reserved Term of use GREENMIND
      </div>
    </footer>
  );
}