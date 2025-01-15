import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { user } = useAuth();

  const events = [
    {
      title: "RoboRace",
      date: "Feb 21-27, 2024",
      description: "Robotics Race for the best Robotics Team",
      categories: ["Hardware", "Software", "Innovation"],
      details: {
        venue: "Main Ground, NIT Hamirpur",
        time: "10:00 AM - 5:00 PM",
        prize: "₹50,000",
        teamSize: "3-4 members",
        requirements: [
          "Basic knowledge of robotics",
          "Own laptop",
          "Components will be provided"
        ],
        rules: [
          "Teams must follow safety guidelines",
          "No pre-built robots allowed",
          "Time limit strictly enforced"
        ]
      }
    },
    {
      title: "Workshops",
      date: "Feb 21-27, 2024",
      description: "Pre-hackathon workshops on robotics fundamentals",
      categories: ["Learning", "Preparation"],
      details: {
        venue: "Seminar Hall",
        time: "2:00 PM - 4:00 PM",
        topics: [
          "Introduction to Robotics",
          "Sensor Integration",
          "Programming Basics"
        ],
        requirements: [
          "No prior experience needed",
          "Laptop recommended"
        ]
      }
    },
    {
      title: "Tech Talks",
      date: "Feb 21-27, 2024",
      description: "Industry experts sharing insights and experiences",
      categories: ["Knowledge", "Networking"],
      details: {
        venue: "Auditorium",
        time: "11:00 AM - 1:00 PM",
        speakers: [
          "Dr. John Doe - AI Expert",
          "Jane Smith - Robotics Engineer"
        ],
        topics: [
          "Future of Robotics",
          "Industry Applications",
          "Career Opportunities"
        ]
      }
    }
  ];

  const handleRegister = (event) => {
    if (!user) {
      alert("Please login to register for events");
      return;
    }
    // Add registration logic here
    alert(`Successfully registered for ${event.title}`);
  };

  return (
    <div className="min-h-screen py-20 z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-1000"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Events at <span className="text-pink-400">RoboWeek 3.0</span></h1>
          <p className="text-xl text-pink-100">Discover what's happening at RoboWeek 2024</p>
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
              onClick={() => setSelectedEvent(event)}
              className="backdrop-blur-lg bg-black/20 rounded-xl border border-pink-500 shadow-lg hover:border-pink-500 transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="px-3 py-1 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-pink-400">{event.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Popup */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black/90 border border-pink-500/30 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <h2 className="text-3xl font-bold text-pink-400 mb-4">{selectedEvent.title}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Event Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-gray-300">
                        <p><span className="text-pink-400">Date:</span> {selectedEvent.date}</p>
                        <p><span className="text-pink-400">Venue:</span> {selectedEvent.details.venue}</p>
                        <p><span className="text-pink-400">Time:</span> {selectedEvent.details.time}</p>
                        {selectedEvent.details.prize && (
                          <p><span className="text-pink-400">Prize Pool:</span> {selectedEvent.details.prize}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {selectedEvent.details.requirements && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Requirements</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        {selectedEvent.details.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedEvent.details.rules && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Rules</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        {selectedEvent.details.rules.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-end gap-4 mt-8">
                    <Button
                      onClick={() => setSelectedEvent(null)}
                      text="Close"
                      textSize="text-lg"
                      iconLink={<i className="ri-close-line"></i>}
                    />
                    <Button
                      onClick={() => handleRegister(selectedEvent)}
                      text="Register"
                      textSize="text-lg"
                      iconLink={<i className="ri-user-add-line"></i>}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;