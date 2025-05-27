// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="about"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
//         <div className="space-y-6 text-gray-300">
//           <p className="text-lg">
//           I am a passionate Backend Developer with 2 years of hands-on experience and a strong 
//           foundation in modern web technologies. I have a drive for creating efficient, 
//           scalable solutions, with expertise in Node.js, MongoDB, and Express. Over the past two years, 
//           I have successfully delivered numerous projects that showcase both my technical capabilities and 
//           problem-solving skills.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="bg-gray-800/50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-4">Languages</h3>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>English</li>
//                 <li>Kannada</li>
//                 <li>Hindi</li>
//                 <li>Urdu</li>
//               </ul>
//             </div>
            
//             <div className="bg-gray-800/50 p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-4">Education</h3>
//               <p className="font-medium">B.E., Electronics and Communication</p>
//               <p className="text-gray-400">HKBK College of Engineering</p>
//               {/* <p className="text-gray-400">CGPA: 7.0</p> */}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-4">Extracurricular Activities</h3>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Organized technical workshops on AI, Blockchain, and Web Development</li>
//               <li>Student coordinator for technical and cultural events</li>
//               <li>Mentored junior students in career guidance</li>
//               <li>Active contributor to environmental sustainability programs</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default About; 


import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const languages = ['English', 'Kannada', 'Hindi', 'Urdu'];
  const activities = [
    'Organized technical workshops on AI, Blockchain, and Web Development',
    'Student coordinator for technical and cultural events',
    'Mentored junior students in career guidance',
    'Active contributor to environmental sustainability programs'
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6 text-gray-300 mb-12">
          <motion.p 
            className="text-lg leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            I am a passionate{' '}
            <motion.span 
              className="text-blue-400 font-semibold"
              whileHover={{ color: "#60a5fa" }}
            >
              Backend Developer
            </motion.span>{' '}
            with 2 years of hands-on experience and a strong foundation in modern web technologies. 
            I have a drive for creating efficient, scalable solutions, with expertise in{' '}
            <motion.span 
              className="text-green-400 font-semibold"
              whileHover={{ color: "#4ade80" }}
            >
              Node.js
            </motion.span>,{' '}
            <motion.span 
              className="text-purple-400 font-semibold"
              whileHover={{ color: "#a78bfa" }}
            >
              MongoDB
            </motion.span>, and{' '}
            <motion.span 
              className="text-cyan-400 font-semibold"
              whileHover={{ color: "#22d3ee" }}
            >
              Express
            </motion.span>. 
            Over the past two years, I have successfully delivered numerous projects that showcase 
            both my technical capabilities and problem-solving skills.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              Languages
            </motion.h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10, color: "#60a5fa" }}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span>{language}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-purple-400"
              whileHover={{ scale: 1.1 }}
            >
              Education
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-medium text-white">B.E., Electronics and Communication</p>
              <p className="text-gray-400 mt-1">HKBK College of Engineering</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <motion.h3 
            className="text-xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            Extracurricular Activities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.03,
                  x: 10,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500/30"
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="text-gray-300 leading-relaxed">{activity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;