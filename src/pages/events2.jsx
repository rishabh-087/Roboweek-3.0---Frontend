import React from "react";
import { motion } from "framer-motion";

const EventsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-pink-400 mb-4">
          Events will be revealed soon!
        </h1>
        <p className="text-xl text-pink-100">
          Stay tuned for updates on the exciting events at RoboWeek 3.0.
        </p>
      </motion.div>
    </div>
  );
};

export default EventsPage;
