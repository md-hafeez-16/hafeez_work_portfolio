// import { motion } from 'framer-motion';

// const education = [
//   {
//     degree: "Full Stack Development",
//     institution: "ExcelR",
//     location: "Bengaluru, India",
//     period: "2023",
//     technologies: ["NodeJS", "Java", "Spring Boot", "JavaScript", "HTML", "CSS", "Bootstrap"]
//   },
//   {
//     degree: "B.E., Electronics and Communication Engineering",
//     institution: "HKBK College of Engineering",
//     location: "Bengaluru, India",
//     period: "2023",
//     //gpa: "7.0"
//   }
// ];

// const Education = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="education"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
//         <div className="space-y-8">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">{edu.degree}</h3>
//                   <p className="text-gray-400">{edu.institution}</p>
//                   <p className="text-gray-400">{edu.location}</p>
//                 </div>
//                 {/* <div className="mt-2 md:mt-0 text-right">
//                   <p className="text-gray-400">{edu.period}</p>
//                   {edu.gpa && (
//                     <p className="text-gray-400">CGPA: {edu.gpa}</p>
//                   )}
//                 </div> */}
//               </div>
              
//               {edu.technologies && (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-medium mb-3">Technologies:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {edu.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Education; 


import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const education = [
  {
    degree: "Full Stack Development",
    institution: "ExcelR",
    location: "Bengaluru, India",
    period: "2023",
    type: "Certification",
    technologies: ["NodeJS", "Java", "Spring Boot", "JavaScript", "HTML", "CSS", "Bootstrap"],
    description: "Comprehensive full-stack development program covering modern web technologies and frameworks."
  },
  {
    degree: "B.E., Electronics and Communication Engineering",
    institution: "HKBK College of Engineering",
    location: "Bengaluru, India",
    period: "2023",
    type: "Bachelor's Degree",
    description: "Specialized in electronics, communication systems, and embedded technologies with hands-on project experience."
  }
];

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: { scale: 1.1, y: -2 }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 relative overflow-hidden"
      id="education"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1.5 }
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Education & Learning
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            My academic journey and professional development path
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 transform md:-translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"
                    animate={hoveredIndex === index ? { scale: 1.5 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"
                    animate={hoveredIndex === index ? { scale: 2 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`relative group flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  />

                  <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                    {/* Institution Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                      <div className="flex-1">
                        <motion.div
                          className="flex items-center gap-3 mb-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              edu.type === 'Certification' 
                                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.type}
                          </motion.div>
                          <span className="text-gray-400 text-sm">{edu.period}</span>
                        </motion.div>

                        <motion.h3 
                          className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {edu.degree}
                        </motion.h3>

                        <motion.div
                          className="space-y-1 mb-4"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-blue-300 font-medium flex items-center gap-2">
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </motion.svg>
                            {edu.institution}
                          </p>
                          <p className="text-gray-400 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {edu.location}
                          </p>
                        </motion.div>

                        <motion.p
                          className="text-gray-300 text-sm mb-6 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                          viewport={{ once: true }}
                        >
                          {edu.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Technologies */}
                    {edu.technologies && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                          <motion.svg
                            className="w-5 h-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </motion.svg>
                          Technologies Learned:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              variants={techVariants}
                              initial="hidden"
                              whileInView="visible"
                              whileHover="hover"
                              transition={{ delay: techIndex * 0.1 + index * 0.2 + 0.8 }}
                              viewport={{ once: true }}
                              className="group relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-pointer"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                              />
                              <span className="relative z-10">{tech}</span>
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 opacity-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24" className="text-blue-400">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
            <span className="font-medium">Continuous Learning Journey</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;