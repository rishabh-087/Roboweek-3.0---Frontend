import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

const Login2 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md backdrop-blur-lg bg-black/20 p-8 rounded-2xl border border-cyan-500/30"
      >
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-300">
              <input type="checkbox" className="mr-2 accent-cyan-400" />
              Remember me
            </label>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Forgot password?
            </a>
          </div>

          <div className="pt-4">
            <Button 
              text="Login" 
              textSize="text-xl" 
              iconLink={<i className="ri-login-circle-line"></i>}
            />
          </div>

          <p className="text-center text-gray-300 mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login2;