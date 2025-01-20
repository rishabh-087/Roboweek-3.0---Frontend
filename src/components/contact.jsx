import React, { useState } from 'react';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div id='contact' className="relative z-[100] min-h-screen py-12 px-4 sm:px-6 lg:px-8 lg:text-left text-center ">
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-black/50 border border-pink-500/50 rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="p-8 border-r border-pink-500/50">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Chat to us</h3>
                <p className="text-gray-300 mt-2">Our robot team is ready to assist.</p>
                <a href="mailto:hello@roboweek.dev" className="text-pink-400 hover:text-pink-300 mt-1 block">
                  roboweek@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Visit us</h3>
                <p className="text-gray-300 mt-2">National Institute of Technology, Hamirpur</p>
                <p className="text-gray-300">Anu, Hamirpur District</p>
                <p className="text-gray-300">Himachal Pradesh, India</p>
                <p className="text-gray-300">PIN Code: 177005</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Operating Hours</h3>
                <p className="text-gray-300 mt-2">Our robots work 24/7</p>
                <p className="text-pink-400">AI Support Always Available</p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 pt-8">
                <a href="#" className="text-pink-400 hover:text-pink-300">
                  <i className="ri-discord-line text-3xl"></i>
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-300">
                  <i className="ri-github-fill text-3xl"></i>
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-300">
                  <i className="ri-twitter-x-line text-3xl"></i>
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-300">
                  <i className="ri-youtube-line text-3xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-extrabold text-pink-400 font-squidFont">Contact Us </h2>
              {/* <p className="mt-2 text-gray-300">
                Tell us about your interest in AI and robotics. Let's build the future together.
              </p> */}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="text-white mt-1 block w-full px-3 py-2 border-b border-pink-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="text-white mt-1 block w-full px-3 py-2 border-b border-pink-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Tell us your queries...
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      className="text-white mt-1 block w-full px-3 py-2 border-b border-pink-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="flex justify-center">
                  <Button
                    text="Submit"
                    onClick={handleSubmit}
                    textSize="text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
