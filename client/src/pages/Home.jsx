  // import React, { useState, useEffect } from "react";
  // import { motion, AnimatePresence } from "framer-motion";
  // import Lotion from '../../assets/home/lotion.png'
  // import Cover2 from '../../assets/home/cover2.png'
  // import Cover3 from '../../assets/home/image.png'
  // const slides = [
  //   { id: 1, img:Lotion },
  //   { id: 2, img:Cover2 },
  //   { id: 3, img:Cover3 },
  //   { id: 4, title: "Serums & Boosters", img: "/images/serum.jpg" },
  //   { id: 5, title: "Hair Care Products", img: "/images/haircare.jpg" },
  //   { id: 6, title: "Sun Protection", img: "/images/sunscreen.jpg" },
  //   { id: 7, title: "Moisturizers", img: "/images/moisturizers.jpg" },
  // ];

  // export default function HeroCarousel() {
  //   const [index, setIndex] = useState(0);

  //   // Auto-change every 4s
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setIndex((prev) => (prev + 1) % slides.length);
  //     }, 8000);
  //     return () => clearInterval(timer);
  //   }, []);

  //   return (
  //     <div className="relative w-full h-[100vh] rounded-2xl shadow-lg overflow-hidden ">
  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={slides[index].id}
  //           className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
  //           style={{ backgroundImage: `url(${slides[index].img})` }}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ duration: 2, ease: "easeInOut" }}
  //         >
  //           <h2 className="text-3xl md:text-5xl font-bold text-white bg-black/30 px-6 py-3 rounded-xl shadow-md">
  //             {slides[index].title}
  //           </h2>
  //         </motion.div>
  //       </AnimatePresence>

  //       {/* Arrows */}
  //       {/* <button
  //         onClick={() =>
  //           setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  //         }
  //         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
  //       >
  //         ‹
  //       </button>
  //       <button
  //         onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
  //         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
  //       >
  //         ›
  //       </button> */}
  //     </div>
  //   );
  // }


  import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lotion from '../../assets/home/lotion.png'
import Cover2 from '../../assets/home/cover2.png'
import glybon from '../../assets/home/image.png'

const slides = [
  { id: 1, img: Lotion,},
  { id: 2, img: Cover2, },
  // { id: 3, img: Cover3,  },
  { id: 4, img: glybon },
  { id: 5, img: "/images/haircare.jpg", title: "Hair Care Products" },
  { id: 6, img: "/images/sunscreen.jpg", title: "Sun Protection" },
  { id: 7, img: "/images/moisturizers.jpg", title: "Moisturizers" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-change every 8s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100vh] md:h-[100vh] rounded-2xl shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].img})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white bg-black/30 px-6 py-3 rounded-xl shadow-md text-center">
            {slides[index].title}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Optional Arrows */}
      {/* 
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10"
      >
        ›
      </button>
      */}
    </div>
  );
}
