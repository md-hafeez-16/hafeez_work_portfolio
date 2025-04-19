import { motion } from 'framer-motion';

const education = [
  {
    degree: "Full Stack Development",
    institution: "ExcelR",
    location: "Bengaluru, India",
    period: "2023",
    technologies: ["NodeJS", "Java", "Spring Boot", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    degree: "B.E., Electronics and Communication Engineering",
    institution: "HKBK College of Engineering",
    location: "Bengaluru, India",
    period: "2023",
    //gpa: "7.0"
  }
];

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-400">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-gray-400">CGPA: {edu.gpa}</p>
                  )}
                </div>
              </div>
              
              {edu.technologies && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education; 