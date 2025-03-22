import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(40, 179, 14, 0) 48.29%, rgba(40, 179, 14, 0.5) 112.69%)",
      }}
    >
      {/* Background Animations */}
      <motion.div
        className="absolute inset-0 grid grid-cols-5 gap-4 opacity-50 -z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-10 h-10 bg-green-300 rounded-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.button
        className="px-6 py-3 bg-black text-white rounded-full mb-4 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🌍 Let’s Save our Environment
      </motion.button>

      {/* Title with Slide-in Animation */}
      <motion.h1
        className="text-5xl font-bold text-center relative z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Streamline Your Sustainability <br />
        Reporting With{" "}
        <motion.span
          className="text-green-600"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          CARBON CRUNCH
        </motion.span>
      </motion.h1>

      {/* Subheading with Slide-in Animation */}
      <motion.p
        className="mt-4 text-gray-600 text-center relative z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <span className="text-green-500 font-bold">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders
      </motion.p>

      {/* Buttons with Staggered Animation */}
      <div className="mt-6 space-x-4 relative z-10">
        <motion.a
          href="/calculator"
          className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-md shadow-md cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
        >
          Free Calculator
        </motion.a>
        <motion.a
          href="/book-demo"
          className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          Book Demo
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
