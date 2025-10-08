import React from 'react'

function Footer() {
  return (
    <div>
       {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4 text-blue-600 font-light space-x-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.97-4.03 9-9 9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6l4 2" />
                </svg>
                <span className="text-xl font-semibold">GHRI</span>
              </div>
              <p className="text-blue-600">Global Health Care in Nigeria.</p>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                {['Home', 'About Us', 'Projects', 'Get involved', 'Blog', 'Contact Us', 'Podcast'].map((item) => (
                  <li key={item}>
                    {/* <Link to="" className="hover:text-blue-400"> */}
                      {item}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                {['Our Features', 'Efficiency', 'Solutions', 'Updates'].map((item) => (
                  <li key={item}>
                    {/* <Link to="#" className="hover:text-blue-400"> */}
                      {item}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                {['Social', 'Twitter', 'Instagram', 'Threads'].map((item) => (
                  <li key={item}>
                    {/* <Link to="#" className="hover:text-blue-400"> */}
                      {item}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© All rights reserved 2024</p>
            <ul className="flex space-x-4 mt-2 md:mt-0">
              <li className="hover:text-blue-600 cursor-pointer">Terms</li>
              <li className="hover:text-blue-600 cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
