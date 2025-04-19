import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Mahhmmed Hafeez Mulla
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          Backend Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Results-driven Backend Developer specializing in Node.js, MongoDB, and Express. 
          Building scalable solutions and optimizing performance for modern web applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/Hafeez_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            View Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 