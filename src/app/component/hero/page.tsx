"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import proImage from "../../../../public/assets/pro.jpg"

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          {/* Left Section (Text) */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['I am Abdul Salam', 'I am Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[120px] h-[2px] bg-black mb-6'></div>
            <p className="mb-8 leading-relaxed text-black text-sm md:text-base">
              Welcome to My Portfolio! Hi, I&apos;m Abdul Salam, a web developer with a passion for crafting dynamic and user-friendly websites.
              I specialize in HTML, CSS, Next.js, TypeScript, JavaScript, and Tailwind CSS. My goal is to create seamless, efficient,
              and visually stunning web experiences. With a strong foundation in modern web technologies, 
              I transform ideas into engaging digital solutions. Let&apos;s build something amazing together!
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-gray-100 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Section (Image) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[15rem] md:w-[20rem] lg:w-[25rem]"
              alt="hero"
              width={500}
              height={500}
              src={proImage}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
