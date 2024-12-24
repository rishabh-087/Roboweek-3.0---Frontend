import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: 'ri-home-line' },
    { name: 'About', href: '/about', icon: 'ri-information-line' },
    { name: 'Events', href: '/events', icon: 'ri-calendar-event-line' },
    { name: 'Team', href: '/team', icon: 'ri-team-line' },
    { name: 'Sponsors', href: '/sponsors', icon: 'ri-money-dollar-circle-line' },
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <Link to="/login">
          <Button text={"Login"} textSize="text-2xl" iconLink={<i className="ri-login-box-line text-3xl"></i>} />
        </Link>
      </div>

      <nav className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="backdrop-blur-lg bg-black/20 border border-cyan-500/30 rounded-2xl p-4">
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
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