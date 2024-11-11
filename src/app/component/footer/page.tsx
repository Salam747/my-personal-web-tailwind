"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-100 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-col sm:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-100">
            <div className="text-xl">ABDUL SALAM</div>
          </a>
          <p className="text-sm text-gray-100 mt-4 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2">
            © 2024 All rights reserved
          </p>
          <span className="flex justify-center mt-4 sm:mt-0 space-x-3">
            <Link
              target="_blank"
              href="https://github.com/Salam747?tab=repositories"
              className="text-gray-100 hover:text-gray-300"
            >
              <BsGithub className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/codewith_abdulsalam/profilecard/?igsh=YnFsa3d4aHYwb2lm"
              className="text-gray-100 hover:text-gray-300"
            >
              <SiInstagram className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abdul-sallam-9248bb244"
              className="text-gray-100 hover:text-gray-300"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              href="https://vercel.com/abdul-salams-projects-29c00320"
              className="text-gray-100 hover:text-gray-300"
            >
              <SiVercel className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
