import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images2/image 22.webp';
import img2 from '../assets/images2/Frame 584_3.webp';
import img3 from '../assets/images2/help homeless.webp';
import img4 from '../assets/images2/Doctors profile image.webp';
import footerPlane from '../assets/images2/footer kite plane image.png';
import footerDottedLine from '../assets/images2/dotted line on footer under the blue plane image.png';




function Telemed() {
  return (
    <div className="font-sans text-gray-800">
      {/* Main Content Section */}
      <section className="container mx-auto my-10 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
              Keep your doctors <br />
              <span className="font-bold">in the loop</span>
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              Securely share your comprehensive medical history with <br /> your doctors for better communication and care
            </p>
            <Link
              to="/SignUp"
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Book An Appointment
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={img1}
              alt="Doctor and patient discussing medical records in a modern clinic"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 ">
          <div className="flex-1 p-6 text-center border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 10v10h10V10M7 10V6a2 2 0 012-2h6a2 2 0 012 2v4" />
              </svg>
            </div>
            <h5 className="text-xl font-semibold mb-2">Emergency Care</h5>
            <p className="text-gray-600">Must be the priority for any healthcare</p>
          </div>
          
          <div className="flex-1 p-6 text-center bg-blue-600 text-white rounded-lg shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h5 className="text-xl font-semibold mb-2">Chamber Service</h5>
            <p>Clinical excellence must be the priority</p>
          </div>
          
          <div className="flex-1 p-6 text-center border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-8 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h5 className="text-xl font-semibold mb-2">Hospitality</h5>
            <p className="text-gray-600">Clinical excellence must be the priority</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto my-16 px-4 ">
        <h2 className="text-center text-3xl font-semibold mb-3">How it Works!</h2>
        <p className="text-center mb-12 text-lg text-gray-600 max-w-xl mx-auto">
          Discover, book, and experience personalized healthcare effortlessly with our user-friendly Doctor Appointment Website
        </p>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={img2}
              className="w-full rounded-lg "
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              <span className="text-blue-400 mr-2">1.</span> Find the doctor that resonates with you
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Good health is mental, physical, and social wellbeing, not just the absence of diseases. It includes strong connection and quick access to support.
            </p>
            <a
              href="/SignUp"
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Search Doctor
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={img3}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">2. Book and set up an appointment</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Good health is mental, physical, and social wellbeing, not just the absence of diseases. It includes strong connection and quick access to support.
            </p>
            <a
              href="/SignUp"
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="container mx-auto my-16 px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Doctors Grid */}
          <div className="lg:w-8/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doctor Cards */}
              {[
                { name: 'Dr. James Johnson', specialty: 'Gynecologist', rating: 4.5 },
                { name: 'Dr. Sarah Smith', specialty: 'Pediatrician', rating: 4.6 },
                { name: 'Dr. Emily Davis', specialty: 'Cardiologist', rating: 4.7 },
                { name: 'Dr. Michael Brown', specialty: 'Neurologist', rating: 4.8 }
              ].map((doctor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                  <img
                        src={ img4 }
                    alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-lg mb-2">{doctor.name}</h4>
                  <p className="text-gray-600 mb-3">{doctor.specialty}</p>
                  <div className="flex items-center text-yellow-500">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:w-4/12 bg-blue-50 rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">3. Get the best</h3>
            <p className="mb-6 text-gray-700">
              Get the best, receive top-notch medical care from the finest doctors available
            </p>
            <a
              href="/SignUp"
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition text-center"
            >
              Get Started
            </a>
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

export default Telemed;
