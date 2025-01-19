import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const BottomPart = () => {
  return (
    <footer className="bg-[#202024]  text-gray-400 text-sm pt-8 pb-4 px-6">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6  flex  flex-col gap-3 justify-center items-center md:justify-start md:items-start">
        <div className="text-white  flex flex-col items-center justify-center text-2xl font-bold">
            <p className="text-3xl lg:text-4xl">
              W<span className="text-blue-500">O</span>W{" "}
            </p>
            <span className="text-xs lg:text-lg text-white">VEGAS</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-lg" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-lg" />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebook className="text-lg" />
            </a>
          </div>
          <p className="mb-2 text-xs">
          © 2024 WOW Vegas | All Rights Reserved.
        </p>
        </div>

        {/* Middle Section */}
        <div className="flex gap-[70px]  mb-6 text-xs lg:mb-0">
          <div>
            <h3 className="text-white font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">WOW Vegas</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">24/7 Customer Help</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Responsible Social Gaming</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Terms & Conditions</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">T&Cs</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">FAQ</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">General</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Payment</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Verification</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-6 pt-4">
      
        <p className="mb-2">
          WOWVegas.com is owned and operated by MW SERVICES LIMITED incorporated and registered in Gibraltar with company number 120828 whose registered office is at 5-9 Main Street, Gibraltar GX11 1AA.
        </p>
        <p className="flex items-center">
          <span className="text-lg mr-2">🔞</span> Persons under the age of 18 are not permitted to create accounts and/or participate in the games.
        </p>
      </div>
    </footer>
  );
};

export default BottomPart;
