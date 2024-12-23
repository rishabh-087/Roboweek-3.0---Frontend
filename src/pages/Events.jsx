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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-xl text-gray-600">Discover what's happening at RoboHack 2024</p>
        </motion.div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-primary">{event.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-32 font-semibold">Day 1</div>
              <div className="flex-1 p-4 bg-white rounded-lg">
                Opening Ceremony, Team Formation, Workshops
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 font-semibold">Day 2</div>
              <div className="flex-1 p-4 bg-white rounded-lg">
                Hackathon Development, Tech Talks
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 font-semibold">Day 3</div>
              <div className="flex-1 p-4 bg-white rounded-lg">
                Project Submissions, Presentations, Awards Ceremony
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;