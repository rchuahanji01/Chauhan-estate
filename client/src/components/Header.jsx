

import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo1.png";
import Nav from "./Nav";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full  fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-2">
        
        {/* Logo + Company Info */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-28 h-30 object-contain"
          />
        

          {/* Animated Company Name + Tagline */}
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {/* Company Name */}
            <motion.h1
              className="text-2xl md:text-3xl font-bold tracking-tight"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-serif text-gray-800">LeoGuard</span>{" "}
              <span className="text-green-600">India</span>{" "}
              <span className="text-gray-800">Pvt. Ltd.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-sm text-gray-500 italic"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transforming skin through science
            </motion.p>
          </motion.div>
        </div>

        {/* Navigation (fade out on scroll) */}
        <motion.div
          animate={{ opacity: scrollY > 50 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="transition-opacity ease-in-out duration-500"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
}
