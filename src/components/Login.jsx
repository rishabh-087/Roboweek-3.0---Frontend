import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const { login, signup, googleSignIn } = useAuth(); // Added googleSignIn

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password || (isSignup && !formData.name)) {
      setError('Please fill in all fields');
      return;
    }

    try {
      if (isSignup) {
        await signup(formData, formData.password);
      } else {
        await login({ email: formData.email, password: formData.password });
      }
      navigate('/events');
    } catch (err) {
      setError(isSignup ? 'Failed to create an account' : 'Login failed');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/events');
    } catch (err) {
      setError('Google sign-in failed');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center relative z-1000'>
      <div className="z-100 p-10 border border-cyan-500/30 rounded-xl bg-black/20 backdrop-blur-lg w-full max-w-md">
        <h1 className='text-center text-cyan-500 font-bold mb-10 text-4xl'>{isSignup ? 'Sign Up' : 'Login'}</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 z-100'>
          {isSignup && (
            <div>
              <h1 className='text-white text-lg mb-2'>Name</h1>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <h1 className='text-white text-lg mb-2'>Email</h1>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h1 className='text-white text-lg mb-2'>Password</h1>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className='w-full text-gray-300 p-3 relative z-100 bg-black/20 backdrop-blur-xl rounded-sm border border-cyan-500/30'
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-center w-full h-1/2 mt-4">
            <Button
              type="submit"
              text={isSignup ? 'Sign Up' : 'Login'}
              textSize='text-2xl'
              iconLink={<i className="ri-login-box-line text-3xl"></i>}
            />
          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full p-3 bg-black/20 text-cyan-500 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition duration-200"
          >
            <i className="ri-google-fill text-2xl"></i>
            <span className="ml-2 text-lg">Sign in with Google</span>
          </button>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center justify-center mt-4">
            <span className="text-lg text-gray-300">
              {isSignup ? 'Already have an account?' : 'New here?'}
            </span>
            <button
              className="ml-2 text-cyan-500 underline hover:text-cyan-400 transition duration-200"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Already have an account?' : 'Create an account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;