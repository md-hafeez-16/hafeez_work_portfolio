import { motion } from 'framer-motion';

const projects = [
  {
    title: "Two-Wheeled Balancing Robot",
    period: "01/2022 - 03/2022",
    description: [
      "Designed a self-balancing robot with a camera stabilization system",
      "Implemented a PID controller for real-time balance adjustments",
      "Integrated gyroscopes and accelerometers for precise motion control"
    ],
    tags: ["Robotics", "PID Control", "Sensors", "Real-time Systems"]
  },
  {
    title: "Electricity Generation Using Dry Waste",
    period: "10/2022 - 07/2023",
    description: [
      "Developed a waste-to-energy model supplemented with solar panels",
      "Integrated microcontrollers for real-time monitoring and data analysis"
    ],
    tags: ["Renewable Energy", "IoT", "Data Analysis", "Sustainability"]
  }
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
      id="projects"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Personal Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2 md:mt-0">{project.period}</p>
              </div>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
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

export default Projects; 