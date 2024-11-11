"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import proImage from "../../../../public/assets/pro.jpg";

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="bg-black text-gray-100 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
            <Image
              src={proImage}
              alt="Logo"
              width="30"
              height="30"
              className="rounded-md h-7 w-7"
            />
            <span className="text-gray-100 ml-3 text-xl hover:cursor-default">
              ABDUL SALAM
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:underline hover:text-white">
              Home
            </Link>
            <Link href="#about" className="mr-5 hover:underline hover:text-white">
              About
            </Link>
            <Link href="#projects" className="mr-5 hover:underline hover:text-white">
              Projects
            </Link>
            <Link href="#skills" className="mr-5 hover:underline hover:text-white">
              Skills
            </Link>
            <Link href="#contact" className="mr-5 hover:underline hover:text-white">
              Contact
            </Link>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
