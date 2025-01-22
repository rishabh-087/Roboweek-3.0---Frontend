import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { user } = useAuth();

  const events = [
    {
      title: "CompeTition 1",
      type: "competition",
      date: "Mar XX, XXXX",
      description: "Descritption will be updated soon ! ",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "10:00 AM - 5:00 PM",
        prize: "₹ XXXX",
        teamSize: "3-4 members",
        requirements: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ],
        rules: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ]
      }
    },
    {
      title: "CompeTition 2",
      type: "competition",
      date: "Mar XX, XXXX",
      description: "Descritption will be updated soon ! ",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "10:00 AM - 5:00 PM",
        prize: "₹ XXXX",
        teamSize: "3-4 members",
        requirements: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ],
        rules: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ]
      }
    },
    {
      title: "CompeTition 3",
      type: "competition",
      date: "Mar XX, XXXX",
      description: "Descritption will be updated soon ! ",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "10:00 AM - 5:00 PM",
        prize: "₹ XXXX",
        teamSize: "3-4 members",
        requirements: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ],
        rules: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ]
      }
    },
    {
      title: "CompeTition 4",
      type: "competition",
      date: "Mar XX, XXXX",
      description: "Descritption will be updated soon ! ",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "10:00 AM - 5:00 PM",
        prize: "₹ XXXX",
        teamSize: "3-4 members",
        requirements: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ],
        rules: [
          "--------------------------------------------------------",
          "--------------------------------------------------------",
          "--------------------------------------------------------"
        ]
      }
    },
    {
      title: "Workshop on Robotics",
      type: "workshop",
      date: "Apr XX, XXXX",
      description: "Join us for an interactive workshop on robotics.",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "10:00 AM - 4:00 PM",
        prize: "Participation Certificate",
        teamSize: "1-2 members",
        requirements: [
          "Basic knowledge of programming",
          "Laptop required"
        ],
        rules: [
          "No late entries allowed",
          "Follow the instructions of the instructor"
        ]
      }
    },
    {
      title: "Guest Talk on AI",
      type: "talk",
      date: "May XX, XXXX",
      description: "A talk by industry experts on the future of AI.",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "2:00 PM - 3:30 PM",
        prize: "Free refreshments",
        teamSize: "Open to all",
        requirements: [
          "No prior registration needed"
        ],
        rules: [
          "Maintain decorum during the talk",
          "Ask questions at the end"
        ]
      }
    },
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'competition', label: 'Competitions' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'talk', label: 'Talks' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.type === selectedCategory);

  const handleRegister = (event) => {
    if (!user) {
      alert("Please login to register for events");
      return;
    }
    alert(`Successfully registered for ${event.title}`);
  };

  return (
    <div className=" min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="relative z-[100] text-4xl lg:text-6xl font-bold text-white mb-4 font-squidFont">Events at <span className="text-pink-400">RoboWeek 3.0</span></h1>
          <p className="relative z-[100] text-xl text-pink-100">Discover exciting events and competitions</p>
        </motion.div>

        {/* Category Filter */}
        <div className="relative z-[100] flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-pink-500/10 text-pink-400 hover:bg-pink-500/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
              className="backdrop-blur-lg bg-black/20 rounded-xl border border-pink-500/30 overflow-hidden hover:border-pink-500 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 flex items-center justify-center">
                <span className="text-white text-lg">Events will be available soon</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-pink-400">{event.date}</div>
                  <div className="text-pink-400">{event.details.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black/90 border border-pink-500/30 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <span className="text-white text-lg">Events will be available soon</span>
                </div>
                <h2 className="text-3xl font-bold text-pink-400 mb-4">{selectedEvent.title}</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <p><span className="text-pink-400">Date:</span> {selectedEvent.date}</p>
                    <p><span className="text-pink-400">Time:</span> {selectedEvent.details.time}</p>
                    <p><span className="text-pink-400">Venue:</span> {selectedEvent.details.venue}</p>
                    {selectedEvent.details.prize && (
                      <p><span className="text-pink-400">Prize:</span> {selectedEvent.details.prize}</p>
                    )}
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