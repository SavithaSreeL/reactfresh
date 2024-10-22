import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="max-w-4xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Contact Info */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-extrabold mb-4">Let's Connect!</h1>
            <p className="text-lg leading-relaxed">
              Have a project idea? Fill in the form and let's chat!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                {/* FontAwesome Icon */}
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3 text-white" />
                <span className="text-lg">email@domain.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3 text-white" />
                <span className="text-lg">+44 1234 567890</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 mr-3 text-white" />
                <span className="text-lg">123 Street, City, Country</span>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form className="space-y-4 bg-white p-6 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Contact