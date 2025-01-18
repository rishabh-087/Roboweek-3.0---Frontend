import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import MembersCard from '../components/MembersCard';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        // Transform the data to match MembersCard expected format
        const formattedMembers = response.data.map(member => ({
          name: member.Name,
          position: member.Post,
          image: member.ProfilePicture,
          bio: member.TechStack,
          skills: member.TechStack.split(',').map(skill => skill.trim()),
          socialLinks: {
            github: member.Github,
            linkedin: member.LinkedIn,
            instagram: member.Instagram
          }
        }));
        setTeamMembers(formattedMembers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-20 z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 backdrop-blur-lg bg-black/10 p-8 rounded-2xl border border-pink-500/50"
        >
          <h1 className="text-6xl font-bold text-white mb-4">Our <span className="text-pink-400">Team</span></h1>
          <p className="text-xl text-gray-300">Meet the minds behind RoboWeek 3.0</p>
        </motion.div>

        <MembersCard members={teamMembers} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 backdrop-blur-lg bg-black/10 rounded-2xl p-8 border border-pink-500/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Our Team</h2>
          <p className="text-center text-gray-300 mb-8">
            We're always looking for passionate individuals to join our team. 
            If you're interested in helping organize future events, get in touch!
          </p>
          <div className="text-center">
            <Button text={"Contact Us"} textSize="text-2xl" iconLink={<i className="ri-mail-line text-3xl"></i>} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;