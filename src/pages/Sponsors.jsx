import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "TechCorp", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "RoboTech", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "InnovateLabs", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "FutureTech", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "AI Systems", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "RoboWorks", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "TechStart", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "NextGen", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" },
        { name: "BuildBot", logo: "https://bostondynamics.com/wp-content/uploads/2023/03/Logo-v2.svg" }
      ]
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-600">Thank you to our amazing sponsors who make RoboWeek 3.0 possible</p>
        </motion.div>

        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div
            key={tierIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: tierIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{tier.tier}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tier.sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-lg mb-8">
            Join our mission to foster innovation in robotics. 
            Partner with us to support the next generation of robotics engineers.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Sponsorship Details
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;