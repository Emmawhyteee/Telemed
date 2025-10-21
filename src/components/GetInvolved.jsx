import { useState } from 'react';
import { Link } from 'react-router-dom'; // For any internal links
import getInvolvedImg from '../assets/images2/Frame 705.webp'; // Adjust path as needed
import missionIcon from '../assets/images2/mission.svg'; // If used elsewhere, but not in this file
// Import sub-components if they exist
import DonateInclude from './DonateInclude'; // Placeholder for your include
import VolunteerInclude from './VolunteerInclude';
import PartnerInclude from './PartnerInclude';

export default function GetInvolved() {
  const [activeAccordion, setActiveAccordion] = useState(null); // State for accordion

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="body-involved min-h-screen bg-white">
      {/* Header */}
      <header className="hero-involved bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Get Involved</h1>
      </header>

      <div className="container mx-auto px-4 my-10 mt-10">
        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <img
              src={getInvolvedImg}
              alt="Get Involved"
              className="img-fluid rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Get Involved in <span className="fw-bold text-blue-600">GHRI’s projects</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consecteturlor sit amet, consecteturlor sit amet, consecteturlor sit amet, consecteturlor sit amet,
              consecteturlor sit amet, consectetur adipiscing elit. Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.
            </p>
          </div>
        </div>

        {/* How it Helps Us Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">How it helps us</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.</li>
            <li>Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.</li>
          </ul>
        </div>

        {/* How to Get Started Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How you can Get started with us</h2>
          <div className="accordion space-y-4" id="getInvolvedAccordion">
            {/* Donate Accordion */}
            <div className="border rounded-lg overflow-hidden">
              <h2 className="accordion-header">
                <button
                  className="accordion-button w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="button"
                  onClick={() => toggleAccordion('donate')}
                >
                  Donate
                </button>
              </h2>
              <div
                className={`accordion-collapse ${activeAccordion === 'donate' ? 'block' : 'hidden'} p-4 bg-white`}
              >
                <DonateInclude /> {/* Replace with your actual component */}
              </div>
            </div>

            {/* Volunteer Accordion */}
            <div className="border rounded-lg overflow-hidden">
              <h2 className="accordion-header">
                <button
                  className="accordion-button w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="button"
                  onClick={() => toggleAccordion('volunteer')}
                >
                  Volunteer
                </button>
              </h2>
              <div
                className={`accordion-collapse ${activeAccordion === 'volunteer' ? 'block' : 'hidden'} p-4 bg-white`}
              >
                <VolunteerInclude /> {/* Replace with your actual component */}
              </div>
            </div>

            {/* Partner Accordion */}
            <div className="border rounded-lg overflow-hidden">
              <h2 className="accordion-header">
                <button
                  className="accordion-button w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="button"
                  onClick={() => toggleAccordion('partner')}
                >
                  Partner with us
                </button>
              </h2>
              <div
                className={`accordion-collapse ${activeAccordion === 'partner' ? 'block' : 'hidden'} p-4 bg-white`}
              >
                <PartnerInclude /> {/* Replace with your actual component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
