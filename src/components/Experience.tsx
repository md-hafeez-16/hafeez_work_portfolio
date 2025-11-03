// import { motion } from 'framer-motion';

// const experiences = [
//   {
//     title: "Backend Developer",
//     company: "Orbit Technologys",
//     location: "Hubli, India",
//     period: "07/2024 - Present",
//     projects: [
//       {
//         name: "Sarathi",
//         description: "Taxi booking system with ride scheduling, real-time tracking, fare calculation, and secure authentication.",
//         tags: ["Node.js", "MongoDB", "RESTful APIs", "Real-time Tracking", "Authentication"]
//       },
//       {
//         name: "Amogh",
//         description: "News aggregation platform with optimized API responses for real-time content updates.",
//         tags: ["Node.js", "API Optimization", "Real-time Updates", "News Aggregation"],
//       },
//       {
//         name: "Zeth & Shimmer",
//         description: "E-commerce platforms with inventory management, user authentication, and seamless checkout experiences.",
//         tags: ["E-commerce", "Inventory Management", "User Authentication", "Node.js"]
//       },
//       {
//         name: "Mahamasthakabhishek 2025",
//         description: "Event management system for registrations and volunteer coordination.",
//         tags: ["Event Management", "Backend Development", "Node.js", "API Development"]
//       },
//       {
//         name: "Sahaya 24x7",
//         description: "A household services platform offering solutions like plumbing, carpentry, electrical work, and appliance repair. Includes features for service booking, provider assignment, real-time tracking, secure payments, and user management.",
//         tags: ["Node.js", "MongoDB", "Service Booking", "Real-time Tracking", "Payment Integration"]
//       }      
//     ]
//   },
//   {
//     title: "Software Developer",
//     company: "Sameday Cleaning Services",
//     location: "Dubai (Remote)",
//     period: "12/2024 - 02/2025",
//     description: [
//       "Developed the entire backend for a Dubai-based cleaning service company",
//       "Built a scalable and secure backend using Node.js",
//       "Collaborated with React.js frontend team and Azure deployment",
//       "Designed and implemented RESTful APIs",
//       "Optimized MongoDB queries for efficient data handling"
//     ]
//   },
//   {
//     title: "Intern",
//     company: "Cranes Varsity",
//     location: "Bengaluru, India",
//     period: "08/2022 - 09/2022",
//     description: [
//       "Gained hands-on experience in IoT and Embedded Systems development",
//       "Worked on projects involving microcontrollers and real-time data processing"
//     ]
//   }
// ];

// const Experience = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="experience"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
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
//                   <h3 className="text-xl font-semibold">{exp.title}</h3>
//                   <p className="text-gray-400">{exp.company} - {exp.location}</p>
//                 </div>
//                 <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
//               </div>
              
//               {exp.projects ? (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-medium mb-3">Key Projects:</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {exp.projects.map((project, idx) => (
//                       <div key={idx} className="bg-gray-800/30 p-4 rounded-lg">
//                         <h5 className="font-medium mb-2">{project.name}</h5>
//                         <p className="text-gray-400 text-sm">{project.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
//                   {exp.description.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Experience; 


import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "Backend Developer",
    company: "Orbit Core Tech",
    location: "Hubli, India",
    period: "07/2023 - 09/2025",
    projects: [
      {
        name: "Sarathi",
        description: "Taxi booking system with ride scheduling, real-time tracking, fare calculation, and secure authentication.",
        tags: ["Node.js", "MongoDB", "RESTful APIs", "Real-time Tracking", "Authentication"]
      },
      {
        name: "Amogh",
        description: "News aggregation platform with optimized API responses for real-time content updates.",
        tags: ["Node.js", "API Optimization", "Real-time Updates", "News Aggregation"]
      },
      {
        name: "Zeth & Shimmer",
        description: "E-commerce platforms with inventory management, user authentication, and seamless checkout experiences.",
        tags: ["E-commerce", "Inventory Management", "User Authentication", "Node.js"]
      },
      {
        name: "Mahamasthakabhishek 2025",
        description: "Event management system for registrations and volunteer coordination.",
        tags: ["Event Management", "Backend Development", "Node.js", "API Development"]
      },
      {
        name: "Live Smart India",
        description: "A wellness and health-tech platform offering AI-powered health assistance, personalized diet plans, organic superfoods, telemedicine, and eco-friendly wellness products. Backend built to support scalable health services, cloud kitchen orders, and expert consultations.",
        tags: ["Node.js", "MongoDB", "Wellness Platform", "Telemedicine", "E-commerce", "Custom Meal Planning"]
      }
    ]
  },
  {
    title: "Software Developer",
    company: "Sameday Cleaning Services",
    location: "Dubai (Remote)",
    period: "12/2024 - 02/2025",
    description: [
      "Developed the entire backend for a Dubai-based cleaning service company",
      "Built a scalable and secure backend using Node.js",
      "Collaborated with React.js frontend team and Azure deployment",
      "Designed and implemented RESTful APIs",
      "Optimized MongoDB queries for efficient data handling"
    ]
  },
  {
    title: "Intern",
    company: "Cranes Varsity",
    location: "Bengaluru, India",
    period: "08/2022 - 09/2022",
    description: [
      "Gained hands-on experience in IoT and Embedded Systems development",
      "Worked on projects involving microcontrollers and real-time data processing"
    ]
  }
];


const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const tagColors = [
    'from-blue-500 to-cyan-250',
    // 'from-purple-500 to-pink-500',
    // 'from-green-500 to-teal-500',
    // 'from-orange-500 to-red-500',
    // 'from-indigo-500 to-purple-500'
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Work Experience
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-4 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
              />

              <div className="ml-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold text-white"
                      whileHover={{ scale: 1.05, color: "#60a5fa" }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400"
                      whileHover={{ color: "#9ca3af" }}
                    >
                      {exp.company} - {exp.location}
                    </motion.p>
                  </div>
                  <motion.p 
                    className="text-gray-400 mt-2 md:mt-0 px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                  >
                    {exp.period}
                  </motion.p>
                </div>
                
                {exp.projects ? (
                  <motion.div 
                    className="mt-6"
                    variants={containerVariants}
                  >
                    <h4 className="text-lg font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      Key Projects:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.projects.map((project, idx) => (
                        <motion.div 
                          key={idx}
                          variants={projectVariants}
                          whileHover={{ 
                            scale: 1.05,
                            rotateY: 5,
                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                          }}
                          className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <motion.h5 
                            className="font-medium mb-2 text-blue-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            {project.name}
                          </motion.h5>
                          <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.map((tag, tagIdx) => (
                              <motion.span
                                key={tagIdx}
                                whileHover={{ scale: 1.1 }}
                                className={`bg-gradient-to-r ${tagColors[tagIdx % tagColors.length]} text-white px-2 py-1 rounded-full text-xs font-medium`}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.ul 
                    className="list-none text-gray-300 space-y-3 mt-4"
                    variants={containerVariants}
                  >
                    {exp.description.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        variants={projectVariants}
                        whileHover={{ x: 10, color: "#d1d5db" }}
                        className="flex items-start space-x-3 cursor-pointer"
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;