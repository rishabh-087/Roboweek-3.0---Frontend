import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigation = [
    { name: 'Home', href: '/', icon: 'ri-home-line' },
    { name: 'About', href: '/about', icon: 'ri-information-line' },
    { name: 'Events', href: '/events', icon: 'ri-calendar-event-line' },
    { name: 'Team', href: '/team', icon: 'ri-team-line' },
    { name: 'Sponsors', href: '/sponsors', icon: 'ri-money-dollar-circle-line' },
  ];

  return (
    <>
      {user && (
        <div className="fixed top-6 left-6 z-50">
          <div className="backdrop-blur-lg bg-black/20 border border-cyan-500/30 rounded-xl px-6 py-3">
            <span className="text-cyan-400 font-semibold">
              <i className="ri-user-line mr-2"></i>
              {user.name}
            </span>
          </div>
        </div>
      )}

      <div className="fixed top-6 right-6 z-50">
        {user ? (
          <div className="flex items-center gap-4">
            <div onClick={handleLogout}>
              <Button 
                text="Logout" 
                textSize="text-2xl" 
                iconLink={<i className="ri-logout-box-line text-3xl"></i>} 
              />
            </div>
          </div>
        ) : (
          <Link to="/login" aria-label="Login">
            <Button 
              text="Login" 
              textSize="text-2xl" 
              iconLink={<i className="ri-login-box-line text-3xl"></i>} 
            />
          </Link>
        )}
      </div>

      <nav className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`} aria-label="Main Navigation">
        <div className="backdrop-blur-lg bg-black/20 border border-cyan-500/30 rounded-2xl p-4">
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 ${
                  !isOpen && 'justify-center'
                } group relative`}
                aria-label={`Go to ${item.name}`}
              >
                <i className={`${item.icon} text-2xl`}></i>
                {isOpen ? (
                  <span className="text-base font-medium">{item.name}</span>
                ) : (
                  <span className="absolute left-full ml-3 px-3 py-2 bg-black/80 text-cyan-400 text-base rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
