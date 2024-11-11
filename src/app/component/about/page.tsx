"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import picBImage from "../../../../public/assets/picB.jpg";

const About = () => {
  return (
    <div id="about">
      <section className="text-black body-font bg-gray-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Section (Image) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[15rem] md:w-[20rem] lg:w-[25rem]"
              alt="hero"
              src={picBImage}
              width={500}
              height={500}
            />
          </div>

          {/* Right Section (Text) */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed text-sm md:text-base">
              Hi, I&apos;m Abdul Salam, a passionate web developer skilled in HTML, CSS, Next.js, TypeScript, JavaScript,
              and Tailwind CSS. My journey began at S.Q.A.Z.A.B High School in Mirpur Khas.
              I furthered my education at Shah Abdul Latif Boys College in Mirpur Khas, where I completed my intermediate studies.
              I later earned a Bachelor&apos;s Degree from Allama Iqbal Open University in Islamabad.
              Additionally, I have a Diploma in Information Technology (DIT) from Genious Academy, Mirpur Khas. 
              I love turning creative ideas into functional and visually appealing websites.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/assets/CV.pdf">
                <button className="inline-flex text-gray-100 bg-gray-900 border-0 py-1 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
