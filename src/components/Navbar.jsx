import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png'; // Fixed logo import

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
    { name: 'Conference', href: '/conference', icon: 'ri-slideshow-line' },
  ];

  return (
    <>
      {/* <div className="fixed top-6 left-6 z-50 rounded-2xl border-[5px] border-pink-500/50 shadow-md shadow-pink-500  overflow-hidden">
        <img src={logo} alt="Logo" className="h-12 w-auto " />
      </div> */}

      {user && (
        <div className="fixed top-6 left-6 z-50">
          <div className="backdrop-blur-lg bg-black/20 border border-pink-500/30 rounded-xl px-6 py-3">
            <span className="text-pink-400 font-semibold">
              <i className="ri-user-line mr-2"></i>
              {user.name}
            </span>
          </div>
        </div>
      )}

      <div className="hidden lg:flex lg:fixed top-6 right-6 z-50">
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
          <Link to="/login">
            <Button
              text="Login"
              textSize="text-xl"
              iconLink={<i className="ri-login-box-line text-xl"></i>}
            />
          </Link>
        )}
      </div>

      <nav
        className={`hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 ${isOpen ? 'w-64' : 'w-20'
          } transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-pink-500/10`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="backdrop-blur-lg bg-black/20 border border-pink-500/30 rounded-2xl transition-all duration-500 ease-in-out hover:bg-black/30">
          <div className="flex flex-col items-center gap-3 py-3">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-300 transition-all duration-500 ease-in-out transform hover:text-pink-400 hover:bg-pink-500/10"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8 transition-transform duration-500 ease-in-out" />
              ) : (
                <Bars3Icon className="h-8 w-8 transition-transform duration-500 ease-in-out" />
              )}
            </div>

            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 
                  transition-all duration-500 ease-in-out transform
                  hover:text-pink-400 hover:bg-pink-500/10 hover:scale-105
                  ${!isOpen && 'justify-center'} group relative`}
              >
                <i className={`${item.icon} text-2xl transition-transform px-[3px] duration-500 ease-in-out group-hover:scale-110`}></i>
                {isOpen ? (
                  <span className="text-base font-medium transition-opacity duration-500 ease-in-out">
                    {item.name}
                  </span>
                ) : (
                  <span className="absolute left-full ml-3 px-3 py-2 bg-black/80 text-pink-400 text-base rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out 
                    transform translate-x-2 group-hover:translate-x-0
                    whitespace-nowrap shadow-lg">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Responsive Navbar for smaller screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/20 border-t border-pink-500/30 p-4 flex justify-around z-50">
        {navigation.map((item) => (
          <Link key={item.name} to={item.href} className="flex flex-col items-center text-gray-300 hover:text-pink-400 transition-colors duration-300">
            <i className={`${item.icon} text-2xl`}></i>
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;