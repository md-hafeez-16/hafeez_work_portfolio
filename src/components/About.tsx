import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
          I am a passionate Backend Developer with 2 years of hands-on experience and a strong 
          foundation in modern web technologies. I have a drive for creating efficient, 
          scalable solutions, with expertise in Node.js, MongoDB, and Express. Over the past two years, 
          I have successfully delivered numerous projects that showcase both my technical capabilities and 
          problem-solving skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>English</li>
                <li>Kannada</li>
                <li>Hindi</li>
                <li>Urdu</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="font-medium">B.E., Electronics and Communication</p>
              <p className="text-gray-400">HKBK College of Engineering</p>
              {/* <p className="text-gray-400">CGPA: 7.0</p> */}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Extracurricular Activities</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Organized technical workshops on AI, Blockchain, and Web Development</li>
              <li>Student coordinator for technical and cultural events</li>
              <li>Mentored junior students in career guidance</li>
              <li>Active contributor to environmental sustainability programs</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 