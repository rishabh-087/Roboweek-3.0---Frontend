import React from 'react';
import CountdownTimer from '../components/Timer';
import Button from '../components/Button';

const speakers = [
  {
    name: "Speaker 1",
    title: "AI Expert",
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
  },
  {
    name: "Speaker 2",
    title: "Robotics Engineer",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
  },
  {
    name: "Speaker 3",
    title: "Data Scientist",
    image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg"
  }
];

const ConferencePage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-black '>
      <header className='text-center py-10 relative z-[100] mt-10'>
        <h1 className='text-7xl font-extrabold text-white mb-4  '>Roboweek 3.0<span className="text-pink-400"> Conference</span></h1>
        <CountdownTimer />
        <p className='text-lg text-gray-300 mt-4 font-semibold text-center'>
          Join us for an exciting event filled with <span className="text-pink-400">knowledge</span> and <span className="text-pink-400">networking</span>!
        </p>
      </header>

      <Button text='Submit your Extract' iconLink= <i className="ri-corner-right-down-line"></i> />

      <section className='mt-12 relative z-[100]'>
        <h2 className='text-5xl font-bold text-center text-white mb-6'>Featured <span className="text-pink-400">Speakers</span></h2>
        <p className='text-lg text-center text-gray-300 mb-8'>Meet our esteemed speakers who will share their insights and expertise at the conference.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-lg border border-pink-500 rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold text-pink-400">{speaker.name}</h2>
              <h3 className="text-lg text-gray-300">Details will be revealed soon!</h3>
              <p className="text-gray-400 mt-2">Stay tuned for more information!</p>
            </div>
          ))}
        </div>
      </section>
      <section className='relative z-[100] mt-12 text-center mb-12'>
        <h2 className='text-5xl font-bold text-white mb-6'>Engaging Workshops & Sessions</h2>
        <p className='text-lg text-gray-300 mb-8'>Join us for interactive workshops and enlightening sessions led by industry leaders.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-black/70 backdrop-blur-lg border border-pink-500 rounded-xl p-6 w-full max-w-xs">
            <h3 className="text-2xl font-bold text-pink-400">AI in Action</h3>
            <p className="text-gray-300 mt-2">Explore the latest advancements in AI technology and its applications.</p>
          </div>
          <div className="bg-black/70 backdrop-blur-lg border border-pink-500 rounded-xl p-6 w-full max-w-xs">
            <h3 className="text-2xl font-bold text-pink-400">Robotics Workshop</h3>
            <p className="text-gray-300 mt-2">Get hands-on experience with robotics and automation tools.</p>
          </div>
          <div className="bg-black/70 backdrop-blur-lg border border-pink-500 rounded-xl p-6 w-full max-w-xs">
            <h3 className="text-2xl font-bold text-pink-400">Data Science Insights</h3>
            <p className="text-gray-300 mt-2">Learn about data analytics and its impact on decision-making.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConferencePage;