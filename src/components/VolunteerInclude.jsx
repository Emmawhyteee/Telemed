import { useState } from 'react';
import volunteerImg from '../assets/images2/Frame 701.webp'; // Adjust path as needed

export default function VolunteerInclude() {
  const [formData, setFormData] = useState({
    fullname: '',
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
    console.log('Volunteer form submitted:', formData);
    // Add API call here, e.g., fetch('/api/volunteer', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="body-volunteer min-h-screen bg-white">
      <header className="hero-involved bg-gray-100 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Volunteer</h1>
      </header>

      <div className="container mx-auto px-4 my-10">
        {/* Volunteer Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <img
              src={volunteerImg}
              alt="Volunteer Image"
              className="img-fluid rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
              We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
            </p>
          </div>
        </div>

        {/* How it Helps Us (Steps Section) */}
        <div className="donate-steps grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
          <div className="step p-6 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg> {/* Hands Helping Icon */}
            <h5 className="text-xl font-semibold text-gray-900 mb-2">To Help</h5>
            <p className="text-gray-700">
              We receive your donations with every bit of love.
            </p>
          </div>
          <div className="step p-6 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> {/* Hand Holding USD Icon */}
            <h5 className="text-xl font-semibold text-gray-900 mb-2">To Impact</h5>
            <p className="text-gray-700">
              We take those donations and invest them in life-changing projects.
            </p>
          </div>
          <div className="step p-6 bg-white rounded-lg shadow-md">
            <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg> {/* People Carry Icon */}
            <h5 className="text-xl font-semibold text-gray-900 mb-2">To Learn</h5>
            <p className="text-gray-700">
              Your investments change the lives of millions.
            </p>
          </div>
        </div>

        {/* How to Volunteer */}
        <div className="container my-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Volunteer</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.</li>
          </ul>
        </div>

        {/* Volunteer Form */}
        <section className="volunteer-form mx-3 py-5 bg-blue-600 text-white">
          <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
          <p className="text-center mb-6">For more enquiries... you can send us a direct message and we would respond promptly.</p>
          <div className="container my-5 col-lg-6 bg-white p-6 rounded-lg shadow-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your fullname"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Your Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="+234"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  What are you good at in 10 words
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your message"
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
