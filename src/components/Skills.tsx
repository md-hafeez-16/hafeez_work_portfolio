// import { motion } from 'framer-motion';

// const skillCategories = [
//   {
//     title: "Backend Development",
//     skills: ["Node.js", "Express.js", "MongoDB"]
//   },
//   {
//     title: "Frontend",
//     skills: ["HTML", "CSS", "JavaScript"]
//   },
//   {
//     title: "Database Management",
//     skills: ["MongoDB", "Database Design", "Query Optimization"]
//   },
//   {
//     title: "Version Control",
//     skills: ["Git", "GitHub"]
//   },
//   {
//     title: "API Development",
//     skills: ["RESTful APIs", "API Documentation", "Postman", "HoppScotch"]
//   },
//   {
//     title: "Soft Skills",
//     skills: [
//       "Time Management",
//       "Team Collaboration",
//       "Problem-Solving",
//       "Leadership",
//       "Interpersonal Communication"
//     ]
//   }
// ];

// const Skills = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="skills"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
//             >
//               <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.skills.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
//                   >
//                     {skill}
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

// export default Skills; 


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  description?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
  color: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
  };
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "🔧",
    color: {
      primary: "from-green-500/30 to-emerald-500/30",
      secondary: "border-green-500/50",
      accent: "text-green-300",
      glow: "shadow-green-500/25"
    },
    skills: [
      { name: "Node.js", level: 85, description: "Server-side JavaScript runtime" },
      { name: "Express.js", level: 80, description: "Web application framework" },
      { name: "MongoDB", level: 75, description: "NoSQL database management" },
      { name: "Firebase", level: 78, description: "Cloud platform for backend services, authentication, and push notifications" }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    color: {
      primary: "from-blue-500/30 to-cyan-500/30",
      secondary: "border-blue-500/50",
      accent: "text-blue-300",
      glow: "shadow-blue-500/25"
    },
    skills: [
      { name: "HTML", level: 90, description: "Semantic markup structure" },
      { name: "CSS", level: 85, description: "Advanced styling & animations" },
      { name: "JavaScript", level: 80, description: "Modern ES6+ features" }
    ]
  },
  {
    title: "Database Management",
    icon: "💾",
    color: {
      primary: "from-purple-500/30 to-pink-500/30",
      secondary: "border-purple-500/50",
      accent: "text-purple-300",
      glow: "shadow-purple-500/25"
    },
    skills: [
      { name: "MongoDB", level: 75, description: "Document-based database" },
      { name: "Firebase Firestore", level: 72, description: "NoSQL cloud database for scalable data storage" },
      { name: "Database Design", level: 70, description: "Schema optimization" },
      { name: "Query Optimization", level: 65, description: "Performance tuning" }
    ]
  },
  {
    title: "Version Control",
    icon: "🔄",
    color: {
      primary: "from-orange-500/30 to-red-500/30",
      secondary: "border-orange-500/50",
      accent: "text-orange-300",
      glow: "shadow-orange-500/25"
    },
    skills: [
      { name: "Git", level: 85, description: "Distributed version control" },
      { name: "GitHub", level: 80, description: "Collaborative development" }
    ]
  },
  {
    title: "API Development",
    icon: "🌐",
    color: {
      primary: "from-teal-500/30 to-cyan-500/30",
      secondary: "border-teal-500/50",
      accent: "text-teal-300",
      glow: "shadow-teal-500/25"
    },
    skills: [
      { name: "RESTful APIs", level: 80, description: "REST architecture design" },
      { name: "API Documentation", level: 75, description: "Comprehensive documentation" },
      { name: "Postman", level: 85, description: "API testing & debugging" },
      { name: "HoppScotch", level: 70, description: "Open-source API client" }
    ]
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    color: {
      primary: "from-yellow-500/30 to-amber-500/30",
      secondary: "border-yellow-500/50",
      accent: "text-yellow-300",
      glow: "shadow-yellow-500/25"
    },
    skills: [
      { name: "Time Management", level: 88, description: "Efficient task prioritization" },
      { name: "Team Collaboration", level: 92, description: "Cross-functional teamwork" },
      { name: "Problem-Solving", level: 85, description: "Analytical thinking" },
      { name: "Leadership", level: 78, description: "Team guidance & mentoring" },
      { name: "Communication", level: 90, description: "Clear & effective dialogue" }
    ]
  }
];

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [/* isVisible */, setIsVisible] = useState(false);
  //const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
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
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        width: { duration: 1.5, ease: "easeOut", delay: 0.5 },
        opacity: { duration: 0.5, delay: 0.3 }
      }
    })
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      x: 10,
      transition: { duration: 0.3 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const particleAnimation = {
    opacity: [0, 1, 0],
    scale: [0, 1.5, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 relative overflow-hidden min-h-screen"
      id="skills"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1.5 }
        }}
      />

      {/* Floating Skill Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            ...particleAnimation,
            transition: {
              ...particleAnimation.transition,
              delay: i * 0.3
            }
          }}
        >
          {['💻', '⚡', '🚀', '🎯', '🔥', '⭐', '🌟', '💡'][i]}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Technical Arsenal
            </h2>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl"
              animate={glowAnimation}
            />
          </motion.div>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A comprehensive toolkit of technologies, frameworks, and methodologies that power innovative solutions
          </motion.p>

          {/* Skill Summary Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { label: "Technologies", value: "15+", icon: "⚡" },
              { label: "Experience", value: "2+ Years", icon: "🚀" },
              { label: "Projects", value: "10+", icon: "🎯" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCategory(categoryIndex)}
              onHoverEnd={() => setHoveredCategory(null)}
              className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 ${category.color.glow} shadow-2xl hover:shadow-3xl`}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  className={`text-4xl p-4 bg-gradient-to-br ${category.color.primary} rounded-xl border-2 ${category.color.secondary} backdrop-blur-sm`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0], 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className={`text-2xl font-bold ${category.color.accent} group-hover:text-white transition-colors duration-300`}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.skills.length} skill{category.skills.length > 1 ? 's' : ''}
                  </p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    custom={skillIndex}
                    whileHover="hover"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group/skill"
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-3">
                      <motion.span
                        className="font-semibold text-gray-200 group-hover/skill:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className={`text-sm font-bold ${category.color.accent} bg-gray-800/50 px-3 py-1 rounded-full border ${category.color.secondary}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/50">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color.primary} relative`}
                          variants={skillBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              x: ['-100%', '100%'],
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill Level Indicator */}
                      <motion.div
                        className={`absolute -top-8 bg-gray-900 ${category.color.accent} px-2 py-1 rounded text-xs font-bold border ${category.color.secondary} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                        style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.div>
                    </div>

                    {/* Skill Description */}
                    {skill.description && hoveredSkill === skill.name && (
                      <motion.p
                        className="text-sm text-gray-400 mt-2 italic"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Category Enhancement Effects */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color.primary} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{ mixBlendMode: 'overlay' }}
              />

              {/* Floating Category Icon */}
              <motion.div
                className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                animate={hoveredCategory === categoryIndex ? {
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                  transition: { duration: 1, repeat: Infinity }
                } : {}}
              >
                {category.icon}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Skill Comparison */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skill Proficiency Overview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.map((category, i) => {
              const avgLevel = Math.round(
                category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
              );
              
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <div className={`text-2xl font-bold ${category.color.accent} mb-1`}>
                    {avgLevel}%
                  </div>
                  <div className="text-sm text-gray-400">
                    {category.title.replace(' Development', '').replace(' Management', '')}
                  </div>
                  <motion.div
                    className={`w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden`}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color.primary}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${avgLevel}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;