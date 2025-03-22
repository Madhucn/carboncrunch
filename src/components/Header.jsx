import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const logoVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const navVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } },
};

const Header = () => {
  return (
    <header className="absolute top-[59px] left-0 w-full flex items-center justify-between px-10 z-50">
      {/* Animated Logo - Appears Every Scroll */}
      <motion.div
        className="flex items-center space-x-3"
        variants={logoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Triggers on every scroll
      >
        <img src="logo.png" alt="CarbonCrunch" className="w-10 h-10" />
        <span className="text-black font-semibold text-xl">CarbonCrunch</span>
      </motion.div>

      {/* Animated Navigation Links - Centered, Appears Every Scroll */}
      <motion.nav
        className="bg-white shadow-lg px-10 py-3 flex space-x-10 rounded-full"
        variants={navVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <a href="#" className="text-black hover:text-gray-600 text-lg font-medium">Home</a>
        <a href="#" className="text-black hover:text-gray-600 text-lg font-medium">Services</a>
        <a href="#" className="text-black hover:text-gray-600 text-lg font-medium">Blog</a>
        <a href="#" className="text-black hover:text-gray-600 text-lg font-medium">About Us</a>
        <a href="#" className="text-black hover:text-gray-600 text-lg font-medium">Contact</a>
      </motion.nav>

      {/* Animated Buttons - Appear Every Scroll */}
      <motion.div
        className="flex space-x-4"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <button className="bg-green-100 text-green-700 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all">
          Login
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all">
          Book Demo
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
