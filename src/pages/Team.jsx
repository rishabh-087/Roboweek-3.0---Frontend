import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Aakash Tiwari",
      role: "Event Director",
      image: "https://www.robosocnith.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Frobosoc-database.appspot.com%2Fo%2Fmembers%252FIMG_20220413_172022.jpg%2520%25201697021957523%3Falt%3Dmedia%26token%3D8fb3c886-0436-4585-bd73-a5111d25017d&w=1920&q=75",
      bio: "Robotics enthusiast with 10+ years of experience in organizing tech events."
    },
    {
      name: "Ashish Ranjan",
      role: "Technical Lead",
      image: "https://i.pravatar.cc/300?img=2",
      bio: "AI researcher and robotics engineer specializing in autonomous systems."
    },
    {
      name: "Ritwiz Singh",
      role: "Operations Manager",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Expert in event management and community building."
    },
    {
      name: "Nitya",
      role: "Sponsorship Coordinator",
      image: "https://i.pravatar.cc/300?img=4",
      bio: "Experienced in building partnerships with tech industry leaders."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">Meet the people behind RoboHack</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Team</h2>
          <p className="text-center text-gray-600 mb-8">
            We're always looking for passionate individuals to join our team. 
            If you're interested in helping organize future events, get in touch!
          </p>
          <div className="text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;