import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function about() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Profile picture */}
              <img
                src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-6 text-lg md:text-xl font-light">
              Welcome to my space where technology and creativity meet. I am passionate about creating sleek, responsive web applications and tackling challenging problems in the tech world.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 text-left mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-lg leading-relaxed mb-6">
              As a software developer, I specialize in building interactive and responsive web applications using the latest technologies. My focus is on delivering high-quality, user-centered designs and scalable backend systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <p className="text-sm mt-2">
                  Crafting intuitive and engaging user interfaces with React, Angular, and modern web tools.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Backend & APIs</h3>
                <p className="text-sm mt-2">
                  Building robust and scalable backend systems using Node.js, PostgreSQL, and API integration.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
                <p className="text-sm mt-2">
                  Focused on creating user-centric, visually appealing designs with a seamless experience.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Collaboration</h3>
                <p className="text-sm mt-2">
                  Open to collaborating on exciting projects, whether it's frontend, backend, or full-stack work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about