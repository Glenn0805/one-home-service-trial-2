import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#324154] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="p-2 bg-white w-36 rounded-sm">
              <img src="/one-home-service-trial-2/logo.svg" />
            </div>
            <p className="mt-4 text-gray-400">
              Creating solutions that connect people and businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.62h3.118v-2.672c0-3.1 1.894-4.787 4.657-4.787 1.324 0 2.462.099 2.795.143v3.241h-1.918c-1.504 0-1.796.715-1.796 1.764v2.311h3.59l-.467 3.62h-3.123V24h6.13c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zm-14.34 20.451H3.771V8.98h4.119v11.471zM5.821 7.374h-.027c-1.381 0-2.277-.95-2.277-2.137 0-1.211.926-2.136 2.332-2.136 1.406 0 2.276.926 2.304 2.137 0 1.188-.897 2.136-2.332 2.136zm14.629 13.077h-4.121v-5.789c0-1.456-.519-2.449-1.819-2.449-1.006 0-1.606.676-1.87 1.33-.097.237-.121.568-.121.9v6.007H8.421s.054-9.742 0-10.746h4.122v1.523c.547-.842 1.525-2.042 3.71-2.042 2.706 0 4.747 1.77 4.747 5.573v5.692z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M9.09,16.44a3.37,3.37,0,0,1-1.52.37,3.46,3.46,0,0,1-3.43-3.4,3.37,3.37,0,0,1,.43-1.65,3.47,3.47,0,0,1,1-1.2,3.45,3.45,0,0,1,2-.6,3.51,3.51,0,0,1,1.5.34V4.5a.5.5,0,0,1,.5-.5h2.09a.5.5,0,0,1,.5.5,4.79,4.79,0,0,0,3.3,4.45A7.34,7.34,0,0,0,19.5,9a.5.5,0,0,1,.5.5V11a.5.5,0,0,1-.54.5,7.7,7.7,0,0,1-3.91-1A5.14,5.14,0,0,1,13,9.25v5.65a3.42,3.42,0,0,1-5.93,1.54A3.5,3.5,0,0,0,9.09,16.44Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.352 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.352 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.352-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.352-2.633 1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.629.443 3.678 1.394 2.727 2.345 2.414 3.491 2.356 4.769.072 7.052 0 8.333 0 12c0 3.667.072 4.948.356 7.231.058 1.278.371 2.424 1.322 3.375.951.951 2.097 1.264 3.375 1.322C8.332 23.986 8.741 24 12 24c3.667 0 4.948-.072 7.231-.356 1.278-.058 2.424-.371 3.375-1.322.951-.951 1.264-2.097 1.322-3.375.284-2.283.356-3.564.356-7.231 0-3.667-.072-4.948-.356-7.231-.058-1.278-.371-2.424-1.322-3.375-.951-.951-2.097-1.264-3.375-1.322C16.948.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1 1.44-1.44 1.44 1.44 0 0 1-1.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Weekly Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="mt-4 text-gray-400">
              Get updates on our latest news and services.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-r-md text-white hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 YourCompany. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
