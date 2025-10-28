import { useState } from 'react';
import { Link } from 'react-router-dom'; // For any links
import partnerImg from '../assets/images2/partner.webp'; // Adjust path as needed
import handsHelpingIcon from '../assets/images2/hand.webp'; // Placeholder for icon
import handHoldingUsdIcon from '../assets/images2/image-222.png'; // Placeholder
import peopleCarryIcon from '../assets/images2/image-222.png'; // Placeholder

export default function PartnerInclude() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partner form submitted:', formData);
    // Add API call here, e.g., fetch('/api/partner', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="body-partner min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner with us</h3>

        {/* Donation Process Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <img
              src={partnerImg}
              alt="Partner Image"
              className="img-fluid rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
              We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
            </p>
          </div>
        </div>

        {/* How it Helps Us Section */}
        <div className="flex justify-content-around align-items-center text-center space-y-6 md:space-y-0 md:space-x-8 mb-10">
          <div className="step flex-1">
            <img src={handsHelpingIcon} alt="Hands Helping Icon" className="w-12 h-12 mx-auto mb-4" />
            <h5 className="text-xl font-semibold text-gray-900">To Help</h5>
            <p className="text-gray-700">
              We receive your <br /> donations with every <br /> bit of love.
            </p>
          </div>
          <div className="step flex-1">
            <img src={handHoldingUsdIcon} alt="Hand Holding USD Icon" className="w-12 h-12 mx-auto mb-4" />
            <h5 className="text-xl font-semibold text-gray-900">To Impact</h5>
            <p className="text-gray-700">
              We take those donations <br /> and invest them in life <br /> changing projects.
            </p>
          </div>
          <div className="step flex-1">
            <img src={peopleCarryIcon} alt="People Carry Icon" className="w-12 h-12 mx-auto mb-4" />
            <h5 className="text-xl font-semibold text-gray-900">To Learn</h5>
            <p className="text-gray-700">
              Your investments <br /> change the lives of <br /> millions.
            </p>
          </div>
        </div>

        {/* Why We Need People Section */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-center text-gray-900 mb-4">Why we need partners</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left max-w-md mx-auto">
            <li>Expand access to quality healthcare by funding and supporting new clinics and hospitals in underserved communities.</li>
            <li>Contribute expertise, volunteers, and operational support to improve patient care and build local capacity.</li>
            <li>Partner on sustainable initiatives—training, technology, and outreach—that deliver measurable, long‑term impact.</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <section className="volunteer-form bg-blue-600 py-16 px-4 mx-5 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-bold text-white mb-4">Contact us</h2>
          <p className="text-center text-white mb-8">
            For more enquiries... you can send us a direct message and we <br /> would respond promptly.
          </p>
          <div className="container mx-auto max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-inner">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  What are you good at in 10 words
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
