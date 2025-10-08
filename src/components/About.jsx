import { useState } from 'react';
import { Link } from 'react-router-dom'; // For breadcrumb navigation

// Image imports from src/assets/images2/
import ourStoryImg from '../assets/images2/Frame 8.webp';
import missionMainImg from '../assets/images2/Frame 454.png';
import missionIcon from '../assets/images2/mission.svg';
import visionIcon from '../assets/images2/vision.svg';
import awareIcon from '../assets/images2/aware.svg';
import teamMember1 from '../assets/images2/image-14.png';
import teamMember2 from '../assets/images2/image-11.png';
import teamMember3 from '../assets/images2/image-14.png';
import partner1 from '../assets/images2/team.svg';
import partner2 from '../assets/images2/team1.svg';
import partner3 from '../assets/images2/team2.svg';
import partner4 from '../assets/images2/team1.svg';
import partner5 from '../assets/images2/team.svg';
import About_herobg from '../assets/images2/ABout us page hero image.jpg';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Handle form submission (e.g., API call)
    console.log('Contact form submitted:', formData);
    // Reset form or show success message
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* About Hero Section */}
      <section
        className="relative bg-white py-20 bg-cover bg-center h-[350px] sm:h-[450px] md:h-[550px]"
        style={{ backgroundImage: `url(${About_herobg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative container mx-auto px-4 text-white text-center flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold mb-6 max-w-5xl mx-auto ">
           HOME/ABOUT US
          </h1>
         
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={ourStoryImg}
                alt="Our Story Image"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A Vision for Healthcare Reform
                <br />
                GHRI was founded on a simple yet profound belief: Healthcare should be accessible to everyone, regardless of location or economic status. Too many individuals suffer from preventable diseases, delayed treatments, 
                or lack of proper medical guidance because they cannot afford or access traditional healthcare services.
                Recognizing this global crisis, we created GHRI as a technology-driven healthcare solution designed to eliminate these barriers.
              {' '}
                Our telemedicine platform connects users with verified doctors, enabling them to seek medical advice remotely whether through chat, voice, or video consultations.
                
              {' '}
                To further enhance healthcare efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
 <section id="mission-vision" className="py-24 bg-gray-100">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Mission and Vision</h2>
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="text-center">
        <img
          src={missionMainImg}
          alt="Mission Main Image"
          className="w-full max-w-md mx-auto rounded-lg  mb-6 max-w-full"
        />
      </div>
      <div className="space-y-6">
        {/* Mission Card */}
        <div className=" rounded-lg  flex items-start space-x-4 text-left mission1 lg:-ml-[12rem]">
          <img
            src={missionIcon}
            alt="Mission Icon"
            className="w-12 h-12 flex-shrink-0 max-w-full rounded-lg"
          />
          <div>
            <h5 className="text-blue-600 text-xl font-semibold mb-2">Mission</h5>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to revolutionize global healthcare by leveraging telemedicine <br />
              and AI-driven solutions to provide affordable, efficient, <br />
              and life-saving medical services to underserved populations.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className=" rounded-lg  flex items-start space-x-4 text-left mission2 lg:-ml-[6rem]">
          <img
            src={visionIcon}
            alt="Vision Icon"
            className="w-12 h-12 flex-shrink-0 max-w-full rounded-lg"
          />
          <div>
            <h5 className="text-blue-600 text-xl font-semibold mb-2">Vision</h5>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where healthcare is no longer limited by geography, financial constraints, <br />
              or institutional barriers. Through technology, innovation, and human compassion.
            </p>
          </div>
        </div>

        {/* Awareness Campaign Card */}
        <div className="rounded-lg flex items-start space-x-4 text-left mission3 lg:-ml-[2rem]">
          <img
            src={awareIcon}
            alt="Awareness Icon"
            className="w-12 h-12 flex-shrink-0 max-w-full rounded-lg"
          />
          <div>
            <h5 className="text-blue-600 text-xl font-semibold mb-2">Awareness Campaign</h5>
            <p className="text-gray-700 leading-relaxed">
              Our awareness campaigns focus on disease prevention, <br /> family planning, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: teamMember1, name: 'James Johnson', role: 'Founder, GHRI', desc: 'Description of feature 1.' },
              { img: teamMember2, name: 'Jane Doe', role: 'CEO, GHRI', desc: 'Description of feature 2.' },
              { img: teamMember3, name: 'Sarah Williams', role: 'Chief Medical Officer, GHRI', desc: 'Description of feature 3.' },
            ].map(({ img, name, role, desc }, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${name} Profile`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">{name}</h5>
                    <p className="text-blue-600 font-medium mb-2">{role}</p>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[partner1, partner2, partner3, partner4, partner5].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Partner Logo ${index + 1}`}
                className="h-16 w-auto max-w-xs opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-8">Reach out for collaborations</p>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h5 className="flex items-center text-gray-900 font-semibold mb-1">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    Email Us
                  </h5>
                  <p className="text-gray-500">contact@healthcare.com</p>
                </div>

                {/* Phone */}
                <div>
                  <h5 className="flex items-center text-gray-900 font-semibold mb-1">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </h5>
                  <p className="text-gray-500">+234 123 4567</p>
                </div>

                {/* Location */}
                <div>
                  <h5 className="flex items-center text-gray-900 font-semibold mb-1">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Visit Us
                  </h5>
                  <p className="text-gray-500">123 Health St, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4 shadow:md p-6 rounded-lg bg-gray-100">
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
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
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
          </div>
        </div>
      </section>
    </div>
  );
}
