import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Database Management",
    skills: ["MongoDB", "Database Design", "Query Optimization"]
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    title: "API Development",
    skills: ["RESTful APIs", "API Documentation", "Postman"]
  },
  {
    title: "Soft Skills",
    skills: [
      "Time Management",
      "Team Collaboration",
      "Problem-Solving",
      "Leadership",
      "Interpersonal Communication"
    ]
  }
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
      id="skills"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 