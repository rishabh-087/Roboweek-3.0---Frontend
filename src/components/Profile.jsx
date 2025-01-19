import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Button from './Button';

const Profile = () => {
  const { user, logout } = useAuth();

  // Mock data for registered events - in a real app, this would come from your backend
  const registeredEvents = [
    {
      name: "RoboRace",
      date: "Feb 21-27, 2024",
      status: "Registered",
      teamName: "Team Alpha"
    },
    {
      name: "Drone Workshop",
      date: "Mar 1, 2024",
      status: "Pending",
      teamName: "Solo Participant"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-4xl text-pink-400">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mt-4">{user?.name}</h1>
          <p className="text-gray-400 mt-2">{user?.email}</p>
        </motion.div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-lg bg-black/20 rounded-xl p-6 border border-pink-500/30"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400">Name</label>
                <p className="text-white">{user?.name}</p>
              </div>
              <div>
                <label className="text-gray-400">Email</label>
                <p className="text-white">{user?.email}</p>
              </div>
              <div>
                <label className="text-gray-400">Member Since</label>
                <p className="text-white">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>

          {/* Registered Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="backdrop-blur-lg bg-black/20 rounded-xl p-6 border border-pink-500/30"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Registered Events</h2>
            <div className="space-y-4">
              {registeredEvents.map((event, index) => (
                <div 
                  key={index}
                  className="p-4 bg-black/30 rounded-lg border border-pink-500/20"
                >
                  <h3 className="text-white font-semibold">{event.name}</h3>
                  <p className="text-gray-400 text-sm">{event.date}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-300">Team: {event.teamName}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      event.status === 'Registered' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button
            text="Edit Profile"
            textSize="text-lg"
            iconLink={<i className="ri-edit-line"></i>}
          />
          <Button
            onClick={logout}
            text="Logout"
            textSize="text-lg"
            iconLink={<i className="ri-logout-box-line"></i>}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 