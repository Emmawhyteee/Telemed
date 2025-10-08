import React from 'react'
import { Link } from 'react-router-dom';

import girlImg from '../assets/images/girl.webp';
import herobg from '../assets/images2/homee.jpg';
import frame706 from '../assets/images2/Frame 706.webp';
import footerPlane from '../assets/images2/footer kite plane image.png';
import footerDottedLine from '../assets/images2/dotted line on footer under the blue plane image.png';

function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-white py-20 bg-cover bg-center h-[350px] sm:h-[450px] md:h-[550px]"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative container mx-auto px-4 text-white text-center flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold mb-6 max-w-5xl mx-auto ">
            Transforming HealthCare programs{' '}
            <span className="text-blue-400">Globally.</span>
          </h1>
          <Link
            to="/about"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition max-w-max mx-auto"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-base sm:text-lg mb-12">A little bit about who we are and what we do.</p>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2" data-aos="fade-right">
              <img
                src={frame706}
                alt="About Us"
                className="rounded-lg  w-full"
              />
            </div>
            <div className="md:w-1/2 text-left" data-aos="fade-left">
              <h3 className="text-blue-400 text-xl sm:text-2xl font-semibold mb-4">
                Welcome to Global Health Reform Initiatives
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are dedicated to improving health care in Nigeria by raising awareness,
                gathering resources, and building better healthcare facilities...{' '}
                <Link to="#" className="text-blue-600 underline hover:text-blue-800">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section id="initiatives" className="py-16 text-center bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Key Initiatives</h2>
          <p className="mb-10 text-base sm:text-lg text-gray-600">We thrive at impacting lives...your wellbeing matters!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="3000">
            {/* Cards */}
            {[{
              title: 'Building Hospitals',
              description: 'We are focused on building new hospitals across rural areas.',
              iconPath: "M3 10h18M7 10v10h10V10M7 10V6a2 2 0 012-2h6a2 2 0 012 2v4"
            }, {
              title: 'Training Programs',
              description: 'Providing training programs for healthcare professionals.',
              iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 12a4 4 0 100-8 4 4 0 000 8z"
            }, {
              title: 'Mobile Health Clinics',
              description: 'We run mobile clinics to reach underserved populations.',
              iconPath: "M3 10h18M7 10v10h10V10M7 10V6a2 2 0 012-2h6a2 2 0 012 2v4"
            }].map(({ title, description, iconPath }) => (
              <div key={title} className="bg-blue-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center">
                <div className="mb-4 text-5xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                  </svg>
                </div>
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="mb-4 text-center">{description}</p>
                <Link to="#" className="underline hover:text-gray-200">
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12">Impact Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-6">
                <img
                  src={girlImg}
                  alt={`Story ${item}`}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                />
                <div>
                  <div className="flex space-x-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    {item === 1
                      ? "John's Story - GHRI Helped me access life-saving treatment"
                      : "Mary's Story - Thanks to GHRI, my village now has a healthcare center"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-blue-50 py-16 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto">
            We have different information on how to support GHRI through donations, volunteering, or partnerships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Volunteer', href: '#' },
              { title: 'Donate', href: '#' },
              { title: 'Partner', href: '#' },
            ].map(({ title, href }) => (
              <div key={title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
                <Link to={href} className="text-xl font-semibold text-blue-600 hover:underline">
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">Latest News / Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img
                  src={girlImg}
                  alt="News"
                  className="w-full md:w-1/3 object-cover h-48 md:h-auto"
                />
                <div className="p-4 md:w-2/3 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 mb-1">July 15, 2024</p>
                  <h5 className="font-semibold mb-2 text-lg">
                    GHIR has helped so many communities in terms of healthcare and shelter
                  </h5>
                  <Link to="#" className="text-blue-600 underline mb-2 inline-block">
                    Read More...
                  </Link>
                  <div className="flex space-x-4 text-gray-400 text-sm mt-auto">
                    <span><i className="fa fa-eye" /> 2k</span>
                    <span><i className="fa-regular fa-comment" /> 1k+</span>
                    <span><i className="fa-regular fa-heart" /> 1k+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="relative mt-24 text-white"
        style={{ backgroundColor: '#92ccf8' }}
      >
        <div className="container mx-auto px-4 py-12 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-6 text-base sm:text-lg">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto sm:min-w-[300px]"
            />
            <button
              type="submit"
              className="bg-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Dott element */}
        <img
          src={footerDottedLine}
          alt="Dott decoration"
          className="hidden lg:block absolute w-[150px] h-[150px] left-[20rem] bottom-12 top-0"
        />

        {/* Arroww element */}
        <img
          src={footerPlane}
          alt="Arrow decoration"
          className="hidden lg:block absolute w-[150px] h-[150px] left-[27rem] bottom-24 top-[-90px] animate-bounce"
        />
      </section>

     
    </div>
  );
}

export default Home;
