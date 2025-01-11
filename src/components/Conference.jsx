import React from 'react';
import { motion } from 'framer-motion';

const Conference = () => {
  return (
    <section className="relative w-full py-24 bg-black/20 backdrop-blur-lg min-h-[80vh] z-0 border-t-4 border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

        {/* Heading Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          RoboWeek 3.0 Conference
        </motion.h1>

        {/* Main Paragraph */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Join us for an exciting conference with industry leaders and innovators. Learn from expert speakers, explore cutting-edge technology, and engage in insightful discussions with like-minded individuals. Whether you're a student, professional, or hobbyist, this is your chance to gain valuable insights into the future of robotics.
        </motion.p>

        {/* Additional Text */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Throughout the conference, we will cover a wide range of topics including artificial intelligence, automation, machine learning, and the latest trends in robotics. Attendees will also have the opportunity to network with experts, collaborate on projects, and gain firsthand knowledge from some of the leading figures in the field.
        </motion.p>

        {/* Final Call to Action Text */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Don’t miss out on this unique opportunity to connect, learn, and be inspired. Stay tuned for more details about the schedule, guest speakers, and special events. We can’t wait to see you there!
        </motion.p>
      </div>
    </section>
  );
};

export default Conference;
