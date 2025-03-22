import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Card = ({ children, styles }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`absolute font-bold rounded-lg p-4 shadow-lg ${styles}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      whileHover="hover"
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

const Cards = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col justify-center">
      {/* Background - Split Screen */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-400"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>

      {/* First Card */}
      <Card styles="text-black bg-green-600 w-[446px] h-[246px] top-[120px] left-[857px]">
        <span className="text-7xl font-extrabold">3X</span>
        <p className="text-3xl">ESG High Performers Deliver</p>
        <p className="text-3xl">A Higher Total Shareholder Return</p>
      </Card>

      {/* Second Card */}
      <Card styles="text-white bg-gray-700 w-[499px] h-[164px] top-[331px] left-[596px]">
        <span className="text-7xl font-extrabold">98%</span>
        <p className="text-2xl">Of CEOs Agree Sustainability Is Their Responsibility</p>
      </Card>

      {/* Third Card */}
      <Card styles="text-white bg-gray-800 w-[380px] h-[186px] top-[476px] left-[857px]">
        <span className="text-6xl font-extrabold">18%</span>
        <p className="text-xl text-right">
          Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
        </p>
      </Card>

      {/* Fourth Card */}
      <Card styles="text-black bg-white w-[446px] h-[161px] top-[610px] left-[559px]">
        <span className="text-5xl font-extrabold text-green-500">37%</span>
        <p className="text-2xl">Of The World's Largest Companies Have A Public Net Zero Target.</p>
        <p className="text-2xl">Nearly All Are Off Track.</p>
      </Card>
    </div>
  );
};

export default Cards;
