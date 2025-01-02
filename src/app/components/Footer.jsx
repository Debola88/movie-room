"use client";
import logo from "@/app/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Logo and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
          <div className="text-center lg:text-left">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                className="object-contain max-md:h-[50px] w-auto"
              />
            </Link>{" "}
            <p className="mt-2 text-sm">
              Your ultimate destination for movies. Dive into a world of
              stories, adventure, and cinematic art.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h2 className="text-gray-200 font-semibold">Explore</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Now Showing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Coming Soon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Genres
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-200 font-semibold">Company</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-200 font-semibold">Support</h2>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-200 font-semibold">Follow Us</h2>
              <div className="mt-2 flex space-x-4 text-lg">
                <a href="#" className="hover:text-white">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-white">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CineHaven. All rights reserved.
          </p>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <a href="#" className="hover:text-white">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
