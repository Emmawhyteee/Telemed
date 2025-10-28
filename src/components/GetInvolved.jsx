import { useState } from 'react';
import getInvolvedImg from '../assets/images2/Frame 705.webp'; // Adjust path as needed
import DonateInclude from './DonateInclude'; // Placeholder for your include component
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
      <header
        className="hero-involved relative bg-cover bg-center py-24 mb-5"
        style={{ backgroundImage: `url(${getInvolvedImg})` }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* content above overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">Get Involved</h1>
          <p className="mt-2 max-w-2xl mx-auto">Join GHRI’s projects and make a difference.</p>
        </div>
      </header>

      <div className="container mx-auto px-4 my-10 mt-10">
        {/* Image and Text Section */ }
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <img
              src={getInvolvedImg}
              alt="Get Involved"
              className="img-fluid rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mt-5">
              Why Get Involved in <span className="font-semibold text-blue-600">GHRI’s projects</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mt-4">
              By supporting GHRI, you help deliver essential medical care, expand community health education,
              and strengthen local clinics. Whether you donate, volunteer, or partner with us, your contribution
              helps increase access to care, build long-term capacity, and improve health outcomes for
              underserved communities.
            </p>
          </div>
        </div>

        {/* How it Helps Us Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Your Support</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Donations fund patient care, medical supplies, and community health programs.</li>
            <li>Volunteer time expands outreach, health education, and on-the-ground services.</li>
            <li>Partnerships strengthen infrastructure, training, and long-term sustainability.</li>
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
            <div className="border rounded-lg overflow-hidden my-5">
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
            <div className="border rounded-lg overflow-hidden my-5">
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
