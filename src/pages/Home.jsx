import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/Timer';
import Conference from '../components/Conference';

const Home = () => {

  const theme = {
    themeOfEvent: "Rise of the Machines"
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-[100%] h-screen flex flex-col gap-8 pb-8 items-center justify-center text-white">
        <h1 className="lg:text-[150px] text-[80px] text-center font-bold mt-8 leading-tight" style={{
          WebkitTextStroke: '2px #22d3ee',
          color: 'transparent'
        }}>RoboWeek 3.0</h1>
        <CountdownTimer />
        <h2 className="lg:text-3xl text-lg text-cyan-400 text-center">Conducted by Robotics Society NIT Hamirpur</h2>
        <div className="flex justify-center">
          <Link to="/login">
            <Button text="Register Now" textSize="text-2xl" iconLink={<i className="ri-arrow-right-line"></i>} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 z-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative z-1000 text-2xl font-bold text-center mb-12 text-cyan-400">Why Join RoboWeek 3.0?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              {
                title: "Learn & Innovate",
                description: "Get hands-on experience with cutting-edge robotics technology"
              },
              {
                title: "Network",
                description: "Connect with industry experts and like-minded innovators"
              },
              {
                title: "Win Prizes",
                description: "Compete for exciting prizes and recognition"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-black/20 p-6 rounded-xl border border-cyan-500 shadow-lg hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative z-1000 text-2xl font-bold text-center mb-10 text-cyan-400">Event Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400/30"></div>

            {[ 
              { date: "Feb 21", event: "Registration Opens", details: "Start signing up for the event." },
              { date: "Mar 1", event: "Team Formation Deadline", details: "Form your teams and submit." },
              { date: "Mar 28", event: "Events Begin", details: "Kick-off of the RoboWeek activities." },
              { date: "Mar 29", event: "Day 2", details: "Continuation of events and competitions." },
              { date: "Mar 30", event: "Final Day", details: "Wrap-up and prize distribution." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-6' : 'pr-6 text-right'}`}>
                  <div className="backdrop-blur-lg bg-black/20 p-5 rounded-xl border border-cyan-500 shadow-lg hover:border-cyan-400 transition-all duration-300">
                    <h3 className="text-lg font-bold text-cyan-400 mb-1">{item.date}</h3>
                    <p className="text-gray-300">{item.event}</p>
                    <p className="text-gray-400 text-sm">{item.details}</p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-5 h-5 bg-cyan-400 rounded-full border-4 border-black relative z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <Conference />
    </div>
  );
};

export default Home;
