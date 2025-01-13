import React from 'react';

const ConferencePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-4 text-cyan-400">Welcome to RoboWeek 3.0 Conference</h1>
      <div className="bg-black/30 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Conference Schedule</h2>
        <p className="mb-4">Get ready for a day filled with insightful talks, engaging discussions, and hands-on workshops. Here’s what we have planned:</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">🔹 Keynote Speech: 10:00 AM - 11:00 AM - Join our keynote speaker, Dr. Jane Smith, as she discusses the future of robotics and AI integration.</li>
          <li className="mb-2">🔹 Panel Discussion: 11:30 AM - 12:30 PM - A diverse panel of experts will share their insights on the challenges and opportunities in the robotics field.</li>
          <li className="mb-2">🔹 Networking Lunch: 12:30 PM - 1:30 PM - Connect with fellow attendees, speakers, and industry professionals over a delicious lunch.</li>
          <li className="mb-2">🔹 Workshops: 2:00 PM - 4:00 PM - Participate in hands-on workshops covering topics such as robotic programming, design, and ethical considerations in robotics.</li>
          <li className="mb-2">🔹 Closing Remarks: 4:30 PM - 5:00 PM - Join us for a recap of the day and insights into the future of RoboWeek.</li>
        </ul>
      </div>
    </div>
  );
}

export default ConferencePage;