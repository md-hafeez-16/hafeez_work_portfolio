// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const navItems = [
//   { name: 'Home', href: '#' },
//   { name: 'About', href: '#about' },
//   { name: 'Experience', href: '#experience' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Education', href: '#education' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Find the current section
//       const sections = navItems.map(item => item.href.slice(1));
//       const current = sections.find(section => {
//         if (section === '') return window.scrollY < 100;
//         const element = document.getElementById(section);
//         if (!element) return false;
//         const rect = element.getBoundingClientRect();
//         return rect.top <= 100 && rect.bottom >= 100;
//       });
      
//       setActiveSection(current || '');
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-center h-16">
//           <div className="hidden md:block">
//             <div className="flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                     activeSection === (item.href === '#' ? '' : item.href.slice(1))
//                       ? 'text-white bg-gray-800'
//                       : 'text-gray-300 hover:text-white hover:bg-gray-700'
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden">
//         <div className="fixed bottom-4 left-4 right-4 bg-gray-800 rounded-full shadow-lg">
//           <div className="flex justify-around p-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`p-2 rounded-full transition-colors ${
//                   activeSection === (item.href === '#' ? '' : item.href.slice(1))
//                     ? 'text-white bg-gray-700'
//                     : 'text-gray-300 hover:text-white'
//                 }`}
//               >
//                 <span className="text-xs">{item.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation; 


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        if (section === '') return window.scrollY < 100;
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/80 shadow-2xl backdrop-blur-md border-b border-gray-700/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-gray-800/30 rounded-full px-2 py-1 backdrop-blur-sm">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === (item.href === '#' ? '' : item.href.slice(1))
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem('')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === (item.href === '#' ? '' : item.href.slice(1)) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {hoveredItem === item.name && activeSection !== (item.href === '#' ? '' : item.href.slice(1)) && (
                      <motion.div
                        layoutId="hoverTab"
                        className="absolute inset-0 bg-gray-700/30 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-white block transition-all"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1 transition-all"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-white block mt-1 transition-all"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    activeSection === (item.href === '#' ? '' : item.href.slice(1))
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile Navigation */}
      <motion.div 
        className="fixed bottom-6 left-4 right-4 md:hidden z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 p-2">
          <div className="grid grid-cols-4 gap-1">
            {navItems.slice(0, 4).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`p-3 rounded-xl text-center transition-all ${
                  activeSection === (item.href === '#' ? '' : item.href.slice(1))
                    ? 'text-white bg-gradient-to-b from-blue-500/30 to-purple-500/30 border border-blue-500/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-medium block">{item.name}</span>
              </motion.a>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1 mt-1">
            {navItems.slice(4).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`p-3 rounded-xl text-center transition-all ${
                  activeSection === (item.href === '#' ? '' : item.href.slice(1))
                    ? 'text-white bg-gradient-to-b from-blue-500/30 to-purple-500/30 border border-blue-500/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-medium block">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;