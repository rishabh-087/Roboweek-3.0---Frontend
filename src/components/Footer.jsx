const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">RoboWeek 3.0</h3>
            <p className="mt-4 text-gray-300">
              Join us in shaping the future of robotics through innovation and collaboration.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white">Team</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-white">Sponsors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">Email: roboweek@gmail.com</li>
              <li className="text-gray-300">Phone: +91 XXXXXXXXXX</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Robosoc NITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;