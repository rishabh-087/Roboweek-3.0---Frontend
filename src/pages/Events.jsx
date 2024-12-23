import { motion } from 'framer-motion';


const Events = () => {
  const events = [
    {
      title: "RoboRace",
      date: "Feb 21-27, 2024", 
      description: "Robotics Race for the best Robotics Team",
      categories: ["Hardware", "Software", "Innovation"]
    },
    {
      title: "Workshops",
      date: "Feb 21-27, 2024",
      description: "Pre-hackathon workshops on robotics fundamentals",
      categories: ["Learning", "Preparation"]
    },
    {
      title: "Tech Talks", 
      date: "Feb 21-27, 2024",
      description: "Industry experts sharing insights and experiences",
      categories: ["Knowledge", "Networking"]
    }
  ];

  return (
    <div className="min-h-screen py-20 z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-1000"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Events at <span className="text-cyan-400">RoboWeek 3.0</span></h1>
          <p className="text-xl text-cyan-100">Discover what's happening at RoboWeek 2024</p>
        </motion.div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-black/20 rounded-xl border border-cyan-500 shadow-lg hover:border-cyan-500 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-cyan-400">{event.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-lg bg-black/20 rounded-xl border border-cyan-500 p-8 shadow-lg hover:border-cyan-500 transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Schedule Overview</h2>
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-32 text-lg font-bold text-cyan-400 bg-cyan-500/10 p-3 rounded-lg text-center">Day 1</div>
              <div className="flex-1 p-5 backdrop-blur-sm bg-black/30 rounded-lg border border-cyan-500/30 text-gray-300 shadow-lg hover:bg-black/40 transition-all duration-300">
                Opening Ceremony, Team Formation, Workshops
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-32 text-lg font-bold text-cyan-400 bg-cyan-500/10 p-3 rounded-lg text-center">Day 2</div>
              <div className="flex-1 p-5 backdrop-blur-sm bg-black/30 rounded-lg border border-cyan-500/30 text-gray-300 shadow-lg hover:bg-black/40 transition-all duration-300">
                Hackathon Development, Tech Talks
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-32 text-lg font-bold text-cyan-400 bg-cyan-500/10 p-3 rounded-lg text-center">Day 3</div>
              <div className="flex-1 p-5 backdrop-blur-sm bg-black/30 rounded-lg border border-cyan-500/30 text-gray-300 shadow-lg hover:bg-black/40 transition-all duration-300">
                Project Submissions, Presentations, Awards Ceremony
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;