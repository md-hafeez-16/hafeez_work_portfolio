import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Backend Developer",
    company: "Orbit Technologys",
    location: "Hubli, India",
    period: "07/2024 - Present",
    projects: [
      {
        name: "Sarathi",
        description: "Taxi booking system with ride scheduling, real-time tracking, fare calculation, and secure authentication.",
        tags: ["Node.js", "MongoDB", "RESTful APIs", "Real-time Tracking", "Authentication"]
      },
      {
        name: "Amogh",
        description: "News aggregation platform with optimized API responses for real-time content updates.",
        tags: ["Node.js", "API Optimization", "Real-time Updates", "News Aggregation"],
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
        name: "Sahaya 24x7",
        description: "A household services platform offering solutions like plumbing, carpentry, electrical work, and appliance repair. Includes features for service booking, provider assignment, real-time tracking, secure payments, and user management.",
        tags: ["Node.js", "MongoDB", "Service Booking", "Real-time Tracking", "Payment Integration"]
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
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
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
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company} - {exp.location}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              
              {exp.projects ? (
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-3">Key Projects:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="bg-gray-800/30 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">{project.name}</h5>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 