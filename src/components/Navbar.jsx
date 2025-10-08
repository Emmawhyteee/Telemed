import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/images2/logoo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for desktop dropdowns
  const [serviceOpen, setServiceOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Mouse event handlers for desktop dropdowns
  const handleServiceEnter = () => setServiceOpen(true);
  const handleServiceLeave = () => setServiceOpen(false);
  
  const handleEmergencyEnter = () => setEmergencyOpen(true);
  const handleEmergencyLeave = () => setEmergencyOpen(false);
  
  const handleMoreEnter = () => setMoreOpen(true);
  const handleMoreLeave = () => setMoreOpen(false);

  return (
    <nav className="bg-gray-100 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-blue-400">GHRI</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-400 px-3 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-400 px-3 py-2"
              >
                About Us
              </Link>
            </li>

            {/* Service Dropdown */}
            <li 
              className="relative"
              onMouseEnter={handleServiceEnter}
              onMouseLeave={handleServiceLeave}
            >
              <Link
                to="#"
                className="flex items-center text-gray-700 hover:text-blue-400 px-3 py-2 cursor-pointer"
                role="button"
                aria-haspopup="true"
                aria-expanded={serviceOpen}
              >
                Service
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown menu - controlled by state */}
              <ul 
                className={`absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 ease-in-out z-50 ${
                  serviceOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <li>
                  <Link
                    to="/project"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setServiceOpen(false)} // Close on click
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setServiceOpen(false)} // Close on click
                  >
                    Our Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Emergency Dropdown */}
            <li 
              className="relative"
              onMouseEnter={handleEmergencyEnter}
              onMouseLeave={handleEmergencyLeave}
            >
              <Link
                to="#"
                className="flex items-center text-gray-700 hover:text-blue-400 px-3 py-2 cursor-pointer"
                role="button"
                aria-haspopup="true"
                aria-expanded={emergencyOpen}
              >
                Emergency
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <ul 
                className={`absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 ease-in-out z-50 ${
                  emergencyOpen 
                    ? 'opacity-100 visible translate-y-0 max-h-96 overflow-y-auto' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <li>
                  <Link 
                    to="/emergency" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    General Emergency
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cholera" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    Cholera
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/mpox" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    Mpox
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/covid19" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    Covid 19
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ebola" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    Ebola
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/chickenpox" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setEmergencyOpen(false)}
                  >
                    Chicken pox
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/get_involved"
                className="text-gray-700 hover:text-blue-400 px-3 py-2"
              >
                Get Involved
              </Link>
            </li>

            <li>
              <Link
                to="/telemed"
                className="text-gray-700 hover:text-blue-400 px-3 py-2"
              >
                TeleMed
              </Link>
            </li>

            {/* More Dropdown */}
            <li 
              className="relative"
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <Link
                to="#"
                className="flex items-center text-gray-700 hover:text-blue-400 px-3 py-2 cursor-pointer"
                role="button"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                More
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <ul 
                className={`absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 ease-in-out z-50 ${
                  moreOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <li>
                  <Link 
                    to="/blog" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setMoreOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/podcast" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-colors"
                    onClick={() => setMoreOpen(false)}
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-blue-400 font-semibold px-3 py-2 border border-blue-400 rounded hover:bg-blue-400 hover:text-white transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu - Unchanged */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-100 border-t border-gray-200">
          <ul className="flex flex-col space-y-1 p-4">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            <MobileDropdown
              title="Service"
              links={[
                { to: '/project', label: 'Projects' },
                { to: '/services', label: 'Our Services' },
              ]}
              closeMenu={() => setMobileMenuOpen(false)}
            />

            <MobileDropdown
              title="Emergency"
              links={[
                { to: '/emergency', label: 'General Emergency' },
                { to: '/cholera', label: 'Cholera' },
                { to: '/mpox', label: 'Mpox' },
                { to: '/covid19', label: 'Covid 19' },
                { to: '/ebola', label: 'Ebola' },
                { to: '/chickenpox', label: 'Chicken pox' },
              ]}
              closeMenu={() => setMobileMenuOpen(false)}
            />

            <li>
              <Link
                to="/get_involved"
                className="block px-3 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
            </li>

            <li>
              <Link
                to="/telemed"
                className="block px-3 py-2 text-gray-700 hover:bg-indigo-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                TeleMed
              </Link>
            </li>

            <MobileDropdown
              title="More"
              links={[
                { to: '/blog', label: 'Blog' },
                { to: '/podcast', label: 'Podcast' },
              ]}
              closeMenu={() => setMobileMenuOpen(false)}
            />

            <li>
              <Link
                to="/contact"
                className="block px-3 py-2 text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// MobileDropdown component - Unchanged (already uses state)
function MobileDropdown({ title, links, closeMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-3 py-2 flex justify-between items-center text-gray-700 hover:bg-indigo-100 rounded focus:outline-none"
      >
        {title}
        <svg
          className={`h-4 w-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="pl-4 mt-1 space-y-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="block px-3 py-2 text-gray-700 hover:bg-indigo-200 rounded"
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
