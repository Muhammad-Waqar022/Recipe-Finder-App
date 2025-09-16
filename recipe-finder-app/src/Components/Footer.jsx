import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram,Facebook,Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 dark:bg-green-700 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-10 py-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
        <div>
          <h2 className="text-2xl font-bold">Mealify</h2>
          <p className="mt-2 text-sm text-gray-200">
            Discover delicious recipes from around the world and save your favourites.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-yellow-300 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favmeals" className="hover:text-yellow-300 transition">
                Favourite Meals
              </NavLink>
            </li>
            <li>
              <a
                href="https://portfolio-muhammad-waqar-ajmal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p>Email: <a href="mailto:ranawaqar4343@gmail.com" className="hover:text-yellow-300">ranawaqar4343@gmail.com</a></p>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="hover:text-purple-700 transition"><Instagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><Facebook/></a>
            <a href="#" className="hover:text-red-500 transition"><Youtube/></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-green-400 mt-6 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Mealify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
