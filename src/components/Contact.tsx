// import { motion } from 'framer-motion';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// const contactInfo = {
//   email: "mahhmmedhafeez@gmail.com",
//   phone: "+91 80737 37525",
//   location: "Bengaluru, India",
//   linkedin: "mahhmmed-hafeez-mulla-5605621a2/"
// };

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="py-20"
//       id="contact"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-800/30 rounded-lg p-6"
//           >
//             <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
//             <div className="space-y-4">
//               <a
//                 href={`mailto:${contactInfo.email}`}
//                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
//               >
//                 <EnvelopeIcon className="w-5 h-5" />
//                 <span>{contactInfo.email}</span>
//               </a>
              
//               <a
//                 href={`tel:${contactInfo.phone}`}
//                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
//               >
//                 <PhoneIcon className="w-5 h-5" />
//                 <span>{contactInfo.phone}</span>
//               </a>
              
//               <div className="flex items-center gap-3 text-gray-300">
//                 <MapPinIcon className="w-5 h-5" />
//                 <span>{contactInfo.location}</span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//             className="bg-gray-800/30 rounded-lg p-6"
//           >
//             <h3 className="text-xl font-semibold mb-6">Professional Profile</h3>
//             <div className="space-y-4">
//               <a
//                 href={`https://linkedin.com/in/${contactInfo.linkedin}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//                 <span>LinkedIn Profile</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;



import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const contactInfo = {
  email: "mahhmmedhafeez@gmail.com",
  phone: "+91 80737 37525",
  location: "Bengaluru, India",
  linkedin: "mahhmmed-hafeez-mulla-5605621a2/"
};

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.4 }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 relative overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-6 text-lg">
            Ready to bring your ideas to life? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard('contact')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate={hoveredCard === 'contact' ? 'hover' : 'initial'}
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"
            />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-sm">💬</span>
                  </motion.div>
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 group/item"
                    variants={textVariants}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover/item:border-blue-400/50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white font-medium group-hover/item:text-blue-300 transition-colors">
                        {contactInfo.email}
                      </p>
                      <p className="text-gray-400 text-sm">Email me directly</p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 group/item"
                    variants={textVariants}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover/item:border-green-400/50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white font-medium group-hover/item:text-green-300 transition-colors">
                        {contactInfo.phone}
                      </p>
                      <p className="text-gray-400 text-sm">Call me anytime</p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 group/item"
                    variants={textVariants}
                  >
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30"
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{contactInfo.location}</p>
                      <p className="text-gray-400 text-sm">Based in India</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Profile Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard('profile')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate={hoveredCard === 'profile' ? 'hover' : 'initial'}
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"
            />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-sm">🔗</span>
                  </motion.div>
                  Professional Profile
                </h3>
                
                <motion.a
                  href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/item p-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-500/20 hover:border-blue-400/40 transition-all"
                  variants={textVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg group-hover/item:text-blue-300 transition-colors">
                      LinkedIn Profile
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Connect with me professionally
                    </p>
                    <p className="text-blue-400 text-xs mt-2">
                      linkedin.com/in/{contactInfo.linkedin}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </motion.a>

                {/* Response Time */}
                <motion.div
                  className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-green-300 font-medium">Usually responds within 24 hours</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = `mailto:${contactInfo.email}`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;