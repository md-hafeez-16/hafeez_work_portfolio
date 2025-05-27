// import { motion } from 'framer-motion';
// import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

// const Hero = () => {
//   return (
//     <motion.section 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen flex flex-col justify-center py-20"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <h1 className="text-5xl md:text-7xl font-bold mb-4">
//           Mahhmmed Hafeez Mulla
//         </h1>
//         <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
//           Backend Developer
//         </h2>
//         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
//           Results-driven Backend Developer specializing in Node.js, MongoDB, and Express. 
//           Building scalable solutions and optimizing performance for modern web applications.
//         </p>
//         <div className="flex flex-wrap gap-4">
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="#contact"
//             className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
//           >
//             Contact Me
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="/assets/hafeez_cv.pdf" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
//           >
//             <DocumentArrowDownIcon className="w-5 h-5" />
//             View Resume
//           </motion.a>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Hero; 


import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);


    const bubblePositions = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const name = "Mahhmmed Hafeez Mulla";

//   return (
//     <motion.section 
//       style={{ y, opacity }}
//       className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
//             animate={{
//               x: [0, 100, 0],
//               y: [0, -100, 0],
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: 3 + i * 0.5,
//               repeat: Infinity,
//               delay: i * 0.2
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <motion.div className="relative z-10">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="mb-8"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             {name.split('').map((letter, i) => (
//               <motion.span
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 animate="visible"
//                 variants={letterVariants}
//                 className="inline-block hover:text-blue-400 transition-colors duration-300 cursor-default"
//                 whileHover={{ 
//                   scale: 1.1, 
//                   rotate: [-5, 5, 0],
//                   transition: { duration: 0.3 }
//                 }}
//               >
//                 {letter === ' ' ? '\u00A0' : letter}
//               </motion.span>
//             ))}
//           </h1>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//           className="relative mb-8"
//         >
//           <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 font-semibold">
//             Backend Developer
//           </h2>
//           <motion.div
//             className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
//             initial={{ scaleY: 0 }}
//             animate={{ scaleY: 1 }}
//             transition={{ delay: 2, duration: 0.8 }}
//           />
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
//         >
//           Results-driven Backend Developer specializing in{' '}
//           <motion.span 
//             className="text-blue-400 font-semibold cursor-pointer"
//             whileHover={{ scale: 1.1, color: "#60a5fa" }}
//             transition={{ duration: 0.2 }}
//           >
//             Node.js
//           </motion.span>,{' '}
//           <motion.span 
//             className="text-green-400 font-semibold cursor-pointer"
//             whileHover={{ scale: 1.1, color: "#4ade80" }}
//             transition={{ duration: 0.2 }}
//           >
//             MongoDB
//           </motion.span>, and{' '}
//           <motion.span 
//             className="text-purple-400 font-semibold cursor-pointer"
//             whileHover={{ scale: 1.1, color: "#a78bfa" }}
//             transition={{ duration: 0.2 }}
//           >
//             Express
//           </motion.span>. 
//           Building scalable solutions and optimizing performance for modern web applications.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.8, duration: 0.8 }}
//           className="flex flex-wrap gap-4"
//         >
//           <motion.a
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             href="#contact"
//             className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
//           >
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               initial={false}
//             />
//             <span className="relative z-10">Contact Me</span>
//           </motion.a>
          
//           <motion.a
//             whileHover={{ 
//               scale: 1.05,
//               borderColor: "#60a5fa",
//               color: "#ffffff"
//             }}
//             whileTap={{ scale: 0.95 }}
//             href="/assets/hafeez_cv.pdf" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg backdrop-blur-sm"
//           >
//             <motion.div
//               animate={{ rotate: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <DocumentArrowDownIcon className="w-5 h-5" />
//             </motion.div>
//             View Resume
//           </motion.a>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 3.5, duration: 0.8 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-3 bg-gray-400 rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Hero;



  return (
    <motion.section 
      style={{ y, opacity }}
      className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {bubblePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: pos.left,
              top: pos.top
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {name.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block hover:text-blue-400 transition-colors duration-300 cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [-5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 font-semibold">
            Backend Developer
          </h2>
          <motion.div
            className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
        >
          Results-driven Backend Developer specializing in{' '}
          <motion.span 
            className="text-blue-400 font-semibold cursor-pointer"
            whileHover={{ scale: 1.1, color: "#60a5fa" }}
            transition={{ duration: 0.2 }}
          >
            Node.js
          </motion.span>,{' '}
          <motion.span 
            className="text-green-400 font-semibold cursor-pointer"
            whileHover={{ scale: 1.1, color: "#4ade80" }}
            transition={{ duration: 0.2 }}
          >
            MongoDB
          </motion.span>, and{' '}
          <motion.span 
            className="text-purple-400 font-semibold cursor-pointer"
            whileHover={{ scale: 1.1, color: "#a78bfa" }}
            transition={{ duration: 0.2 }}
          >
            Express
          </motion.span>. 
          Building scalable solutions and optimizing performance for modern web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>
          
          <motion.a
            whileHover={{ 
              scale: 1.05,
              borderColor: "#60a5fa",
              color: "#ffffff"
            }}
            whileTap={{ scale: 0.95 }}
            href="/assets/hafeez_cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
            </motion.div>
            View Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;