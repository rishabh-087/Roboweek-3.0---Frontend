import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About RoboWeek 3.0</h1>
          <p className="text-xl text-gray-600">Empowering the next generation of robotics innovators</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
               RoboWeek 3.0 is dedicated to fostering innovation in robotics through collaborative learning and hands-on experience. 
              We bring together students, professionals, and enthusiasts to create solutions that push the boundaries of what's possible in robotics.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Objectives</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Promote robotics education and innovation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Build a community of robotics enthusiasts</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Create real-world robotics solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Connect students with industry leaders</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "XXX+", label: "Participants" },
              { number: "XX+", label: "Projects Completed" },
              { number: "XX+", label: "Partner Organizations" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;