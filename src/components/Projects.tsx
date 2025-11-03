// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: "Two-Wheeled Balancing Robot",
//     period: "01/2022 - 03/2022",
//     description: [
//       "Designed a self-balancing robot with a camera stabilization system",
//       "Implemented a PID controller for real-time balance adjustments",
//       "Integrated gyroscopes and accelerometers for precise motion control"
//     ],
//     tags: ["Robotics", "PID Control", "Sensors", "Real-time Systems"]
//   },
//   {
//     title: "Electricity Generation Using Dry Waste",
//     period: "10/2022 - 07/2023",
//     description: [
//       "Developed a waste-to-energy model supplemented with solar panels",
//       "Integrated microcontrollers for real-time monitoring and data analysis"
//     ],
//     tags: ["Renewable Energy", "IoT", "Data Analysis", "Sustainability"]
//   }
// ];

// const Projects = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="projects"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Personal Projects</h2>
//         <div className="space-y-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-400 mt-2 md:mt-0">{project.period}</p>
//               </div>
              
//               <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
//                 {project.description.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
              
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects; 
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useRef } from 'react';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// interface Project {
//   title: string;
//   period: string;
//   category: string;
//   description: string[];
//   tags: string[];
//   highlights: string[];
//   status: string;
//   complexity: 'Beginner' | 'Intermediate' | 'Advanced';
//   github?: string;
//   demo?: string;
//   image?: string;
// }

// const projects: Project[] = [
//   {
//     title: "Two-Wheeled Balancing Robot",
//     period: "01/2022 - 03/2022",
//     category: "Robotics & AI",
//     description: [
//       "Designed a self-balancing robot with a camera stabilization system",
//       "Implemented a PID controller for real-time balance adjustments",
//       "Integrated gyroscopes and accelerometers for precise motion control"
//     ],
//     tags: ["Robotics", "PID Control", "Sensors", "Real-time Systems"],
//     highlights: ["Real-time Processing", "Hardware Integration", "Control Systems"],
//     status: "Completed",
//     complexity: "Advanced"
//   },
//   {
//     title: "Electricity Generation Using Dry Waste",
//     period: "10/2022 - 07/2023",
//     category: "Green Technology",
//     description: [
//       "Developed a waste-to-energy model supplemented with solar panels",
//       "Integrated microcontrollers for real-time monitoring and data analysis"
//     ],
//     tags: ["Renewable Energy", "IoT", "Data Analysis", "Sustainability"],
//     highlights: ["Sustainable Solution", "IoT Integration", "Environmental Impact"],
//     status: "Completed",
//     complexity: "Intermediate"
//   }
// ];

// const Projects: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<number | null>(null);
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);
//   const [filter, setFilter] = useState<string>('All');
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);

//   const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

//   const filteredProjects = filter === 'All' 
//     ? projects 
//     : projects.filter(p => p.category === filter);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 80,
//       rotateX: -15,
//       scale: 0.85
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 20,
//         duration: 0.8
//       }
//     },
//     hover: {
//       y: -20,
//       scale: 1.03,
//       rotateX: 8,
//       rotateY: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25
//       }
//     }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0, backdropFilter: "blur(0px)" },
//     visible: { 
//       opacity: 1, 
//       backdropFilter: "blur(10px)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const modalVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8, 
//       rotateX: -30,
//       y: 100
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       rotateX: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       scale: 0.8, 
//       rotateX: 30,
//       y: -100,
//       transition: { duration: 0.3 }
//     }
//   };

//   const tagVariants = {
//     hidden: { opacity: 0, scale: 0.8, x: -20 },
//     visible: (i: number) => ({ 
//       opacity: 1, 
//       scale: 1, 
//       x: 0,
//       transition: {
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 200,
//         damping: 15
//       }
//     }),
//     hover: { 
//       scale: 1.15, 
//       y: -3,
//       rotate: [-1, 1, -1],
//       transition: { 
//         duration: 0.3,
//         rotate: { repeat: Infinity, duration: 2 }
//       }
//     }
//   };

//   const floatingAnimation = {
//     y: [-15, 15, -15],
//     rotate: [-3, 3, -3],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const particleAnimation = {
//     opacity: [0, 1, 0],
//     scale: [0, 1, 0],
//     y: [0, -100],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeOut"
//     }
//   };

//   const getComplexityConfig = (complexity: string) => {
//     const configs = {
//       'Advanced': {
//         gradient: 'from-red-500/30 via-pink-500/30 to-purple-500/30',
//         border: 'border-red-500/50',
//         text: 'text-red-300',
//         glow: 'shadow-red-500/25'
//       },
//       'Intermediate': {
//         gradient: 'from-yellow-500/30 via-orange-500/30 to-red-500/30',
//         border: 'border-yellow-500/50',
//         text: 'text-yellow-300',
//         glow: 'shadow-yellow-500/25'
//       },
//       'Beginner': {
//         gradient: 'from-green-500/30 via-emerald-500/30 to-teal-500/30',
//         border: 'border-green-500/50',
//         text: 'text-green-300',
//         glow: 'shadow-green-500/25'
//       }
//     };
//     return configs[complexity as keyof typeof configs] || configs.Beginner;
//   };

//   const getCategoryIcon = (category: string) => {
//     const iconProps = { className: "w-7 h-7", fill: "none", stroke: "currentColor", strokeWidth: 2 };
    
//     switch (category) {
//       case 'Robotics & AI':
//         return (
//           <svg {...iconProps} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" 
//               d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         );
//       case 'Green Technology':
//         return (
//           <svg {...iconProps} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" 
//               d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//           </svg>
//         );
//       default:
//         return (
//           <svg {...iconProps} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" 
//               d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//           </svg>
//         );
//     }
//   };

//   return (
//     <motion.section
//       ref={containerRef}
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       className="py-24 relative overflow-hidden min-h-screen"
//       id="projects"
//     >
//       {/* Dynamic Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
//       {/* Animated Background Elements */}
//       <motion.div
//         className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
//         animate={floatingAnimation}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rounded-full blur-3xl"
//         animate={{
//           ...floatingAnimation,
//           transition: { ...floatingAnimation.transition, delay: 2 }
//         }}
//       />
      
//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
//           style={{
//             left: `${20 + i * 15}%`,
//             top: `${30 + (i % 2) * 40}%`,
//           }}
//           animate={{
//             ...particleAnimation,
//             transition: {
//               ...particleAnimation.transition,
//               delay: i * 0.5
//             }
//           }}
//         />
//       ))}

//       <div className="max-w-7xl mx-auto relative z-10 px-6">
//         {/* Enhanced Section Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: -60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="inline-block mb-6"
//             whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
//               Featured Projects
//             </h2>
//           </motion.div>
          
//           <motion.p
//             className="text-xl text-gray-400 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             A collection of innovative solutions showcasing technical expertise and creative problem-solving
//           </motion.p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-4 mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           {categories.map((category, i) => (
//             <motion.button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
//                 filter === category
//                   ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white shadow-lg shadow-blue-500/25'
//                   : 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
//               }`}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.1 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div 
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//           layout
//         >
//           <AnimatePresence mode="wait">
//             {filteredProjects.map((project, index) => {
//               const complexityConfig = getComplexityConfig(project.complexity);
              
//               return (
//                 <motion.div
//                   key={project.title}
//                   layout
//                   variants={cardVariants}
//                   whileHover="hover"
//                   onHoverStart={() => setHoveredProject(index)}
//                   onHoverEnd={() => setHoveredProject(null)}
//                   className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 cursor-pointer transition-all duration-500 ${complexityConfig.glow} shadow-2xl hover:shadow-3xl`}
//                   onClick={() => setSelectedProject(index)}
//                 >
//                   {/* Complexity Badge */}
//                   <motion.div
//                     className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-bold border-2 bg-gradient-to-r ${complexityConfig.gradient} ${complexityConfig.border} ${complexityConfig.text} backdrop-blur-sm`}
//                     whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {project.complexity}
//                   </motion.div>

//                   {/* Category Header */}
//                   <motion.div 
//                     className="flex items-center gap-3 mb-6"
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <motion.div
//                       className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
//                       whileHover={{ rotate: 360, scale: 1.1 }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       {getCategoryIcon(project.category)}
//                     </motion.div>
//                     <div>
//                       <h4 className="text-sm font-medium text-blue-300">{project.category}</h4>
//                       <p className="text-xs text-gray-500">{project.period}</p>
//                     </div>
//                   </motion.div>

//                   {/* Project Title */}
//                   <motion.h3 
//                     className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500"
//                     whileHover={{ x: 10 }}
//                   >
//                     {project.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <div className="space-y-3 mb-6">
//                     {project.description.map((desc, i) => (
//                       <motion.div
//                         key={i}
//                         className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: (index * 0.1) + (i * 0.1) }}
//                       >
//                         <motion.div
//                           className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
//                           whileHover={{ scale: 1.5, rotate: 180 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                         <p className="text-sm leading-relaxed">{desc}</p>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Highlights */}
//                   <motion.div className="mb-6">
//                     <h5 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h5>
//                     <div className="flex flex-wrap gap-2">
//                       {project.highlights.map((highlight, i) => (
//                         <motion.span
//                           key={i}
//                           custom={i}
//                           variants={tagVariants}
//                           whileHover="hover"
//                           className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-medium backdrop-blur-sm"
//                         >
//                           ✨ {highlight}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </motion.div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, i) => (
//                       <motion.span
//                         key={i}
//                         custom={i}
//                         variants={tagVariants}
//                         whileHover="hover"
//                         className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* Hover Effects */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   />
                  
//                   {/* Click Indicator */}
//                   <motion.div
//                     className="absolute bottom-4 right-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
//                     whileHover={{ scale: 1.2, rotate: 15 }}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         {/* Project Modal */}
//         <AnimatePresence>
//           {selectedProject !== null && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               onClick={() => setSelectedProject(null)}
//             >
//               <motion.div
//                 className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
//                 variants={modalVariants}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                     {projects[selectedProject].title}
//                   </h3>
//                   <motion.button
//                     onClick={() => setSelectedProject(null)}
//                     className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300"
//                     whileHover={{ scale: 1.1, rotate: 90 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </motion.button>
//                 </div>
                
//                 {/* Detailed project content would go here */}
//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-xl font-semibold mb-3 text-blue-300">Project Overview</h4>
//                     <div className="space-y-2">
//                       {projects[selectedProject].description.map((desc, i) => (
//                         <p key={i} className="text-gray-300">{desc}</p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;



import React, { useState, useRef } from 'react';
import { motion,  AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  period: string;
  category: string;
  description: string[];
  tags: string[];
  highlights: string[];
  status: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  github?: string;
  demo?: string;
  website?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sahaya 24x7",
    period: "06/2025 - Present",
    category: "Web Development",
    description: [
      "Developed a full-fledged on-demand home service platform connecting users with service providers across multiple categories",
      "Built a scalable backend architecture using Node.js, Express, and MongoDB",
      "Implemented user authentication, service provider listings, booking management, and secure payment modules",
      "Integrated real-time tracking and communication between customers and service providers",
      "Implemented push notification services using Firebase for real-time booking updates and alerts",
      "Designed RESTful APIs optimized for frontend and mobile app integration"
    ],
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "RESTful APIs",
      "Real-time Tracking",
      "Service Booking",
      "Payment Integration"
    ],
    highlights: [
      "End-to-End Backend Development",
      "Real-time Functionality",
      "Firebase Integration",
      "Scalable Architecture"
    ],
    status: "Ongoing",
    complexity: "Advanced"
  },
  {
    title: "SameDay Cleaning Services",
    period: "2024 - 2025",
    category: "Web Development",
    description: [
      "Developed a comprehensive cleaning service platform with online booking system",
      "Built responsive web application with modern UI/UX design principles",
      "Integrated payment processing and service management features",
      "Collaborated with a development team to deliver a scalable solution"
    ],
    tags: ["React", "NodeJS", "Web Development", "UI/UX", "Payment Integration", "Team Collaboration"],
    highlights: ["Live Production Website", "Client Collaboration", "Full-Stack Development"],
    status: "Completed",
    complexity: "Advanced",
    website: "https://cleansameday.com/"
  },
  {
    title: "Two-Wheeled Balancing Robot",
    period: "01/2022 - 03/2022",
    category: "Robotics & AI",
    description: [
      "Designed a self-balancing robot with a camera stabilization system",
      "Implemented a PID controller for real-time balance adjustments",
      "Integrated gyroscopes and accelerometers for precise motion control"
    ],
    tags: ["Robotics", "PID Control", "Sensors", "Real-time Systems"],
    highlights: ["Real-time Processing", "Hardware Integration", "Control Systems"],
    status: "Completed",
    complexity: "Advanced"
  },
  {
    title: "Electricity Generation Using Dry Waste",
    period: "10/2022 - 07/2023",
    category: "Green Technology",
    description: [
      "Developed a waste-to-energy model supplemented with solar panels",
      "Integrated microcontrollers for real-time monitoring and data analysis"
    ],
    tags: ["Renewable Energy", "IoT", "Data Analysis", "Sustainability"],
    highlights: ["Sustainable Solution", "IoT Integration", "Environmental Impact"],
    status: "Completed",
    complexity: "Intermediate"
  }
];


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [/*hoveredProject*/, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');
  //const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -15,
      scale: 0.85
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      y: -20,
      scale: 1.03,
      rotateX: 8,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: { 
      opacity: 1, 
      backdropFilter: "blur(10px)",
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: -30,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 30,
      y: -100,
      transition: { duration: 0.3 }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: { 
      scale: 1.15, 
      y: -3,
      rotate: [-1, 1, -1],
      transition: { 
        duration: 0.3,
        rotate: { repeat: Infinity, duration: 2 }
      }
    }
  };

  const floatingAnimation = {
    y: [-15, 15, -15],
    rotate: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const particleAnimation = {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    y: [0, -100],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  const getComplexityConfig = (complexity: string) => {
    const configs = {
      'Advanced': {
        gradient: 'from-red-500/30 via-pink-500/30 to-purple-500/30',
        border: 'border-red-500/50',
        text: 'text-red-300',
        glow: 'shadow-red-500/25'
      },
      'Intermediate': {
        gradient: 'from-yellow-500/30 via-orange-500/30 to-red-500/30',
        border: 'border-yellow-500/50',
        text: 'text-yellow-300',
        glow: 'shadow-yellow-500/25'
      },
      'Beginner': {
        gradient: 'from-green-500/30 via-emerald-500/30 to-teal-500/30',
        border: 'border-green-500/50',
        text: 'text-green-300',
        glow: 'shadow-green-500/25'
      }
    };
    return configs[complexity as keyof typeof configs] || configs.Beginner;
  };

  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "w-7 h-7", fill: "none", stroke: "currentColor", strokeWidth: 2 };
    
    switch (category) {
      case 'Web Development':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'Robotics & AI':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Green Technology':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" 
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Live': {
        color: 'from-green-500/30 to-emerald-500/30',
        border: 'border-green-500/50',
        text: 'text-green-300',
        icon: '🟢'
      },
      'Completed': {
        color: 'from-blue-500/30 to-cyan-500/30',
        border: 'border-blue-500/50',
        text: 'text-blue-300',
        icon: '✅'
      }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Completed;
    
    return (
      <motion.div
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border bg-gradient-to-r ${config.color} ${config.border} ${config.text} backdrop-blur-sm`}
        whileHover={{ scale: 1.05 }}
      >
        {config.icon} {status}
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-24 relative overflow-hidden min-h-screen"
      id="projects"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rounded-full blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            ...particleAnimation,
            transition: {
              ...particleAnimation.transition,
              delay: i * 0.5
            }
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Featured Projects
            </h2>
          </motion.div>
          
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A collection of innovative solutions showcasing technical expertise and creative problem-solving
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white shadow-lg shadow-blue-500/25'
                  : 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const complexityConfig = getComplexityConfig(project.complexity);
              
              return (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 cursor-pointer transition-all duration-500 ${complexityConfig.glow} shadow-2xl hover:shadow-3xl`}
                  onClick={() => setSelectedProject(index)}
                >
                  {/* Status Badge */}
                  {getStatusBadge(project.status)}

                  {/* Complexity Badge */}
                  <motion.div
                    className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-bold border-2 bg-gradient-to-r ${complexityConfig.gradient} ${complexityConfig.border} ${complexityConfig.text} backdrop-blur-sm`}
                    whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.complexity}
                  </motion.div>

                  {/* Category Header */}
                  <motion.div 
                    className="flex items-center gap-3 mb-6 mt-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {getCategoryIcon(project.category)}
                    </motion.div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-300">{project.category}</h4>
                      <p className="text-xs text-gray-500">{project.period}</p>
                    </div>
                  </motion.div>

                  {/* Project Title */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {project.description.map((desc, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (i * 0.1) }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        />
                        <p className="text-sm leading-relaxed">{desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <motion.div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={tagVariants}
                          whileHover="hover"
                          className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          ✨ {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={tagVariants}
                        whileHover="hover"
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Website Link for SameDay Cleaning */}
                  {project.website && (
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Live Site
                    </motion.a>
                  )}

                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                  
                  {/* Click Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-gray-400 mt-2">{projects[selectedProject].period}</p>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Detailed project content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-300">Project Overview</h4>
                    <div className="space-y-2">
                      {projects[selectedProject].description.map((desc, i) => (
                        <p key={i} className="text-gray-300">{desc}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-300">Key Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-sm">
                          ✨ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-blue-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {projects[selectedProject].website && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-blue-300">Links</h4>
                      <motion.a
                        href={projects[selectedProject].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Live Website
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;