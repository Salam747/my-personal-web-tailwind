"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import lockImage from "../../../../public/assets/lock.jpg"
import clockImage from "../../../../public/assets/clock2.jpg"
import resumeImage from "../../../../public/assets/resume.jpg"
import portfolio from "../../../../public/assets/portfolio.jpg"
import  facebook  from "../../../../public/assets/fb.jpg"
import website from "../../../../public/assets/web.jpg"

const Projects = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-4 mx-auto">
        <div className="flex mx-auto justify-around text-center w-full m-14">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    My Projects
  </h1>
</div>

          <div className="flex flex-wrap m-6 -mt-[3rem]">
            {/* Project- 01 */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={lockImage}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1 ">
                  Analog Clock Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  ANALOG CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I have created  Analog Clock Project
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/analog-clock">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project- 02 */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={clockImage}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    Analog Clock Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ANALOG CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I have created an Analog Clock
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/analog-clock">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project- 03 */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={resumeImage}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    Dynamic Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DYNAMIC RESUME
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I have created a Dynamic Resume Project
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/milestone-03">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* Project- 04 */}
              <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={portfolio}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    Portfolio Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    HTML CSS PORTFOLIO
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I have Created Portfolio website using HTML CSS
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/html-css-portfolio">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* Project- 05 */}
              <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={facebook}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    Facebook login page project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    FACEBOOK LOGIN PAGE 
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I have Created facebook login page clone using HTML CSS
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/facebook-login-page">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* Project- 06 */}
              <div className="w-full sm:w-1/2 md:w-1/3 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={website}
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    Website Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-1">
                    I have Created website using Next.js with tailwind
                  </p>
                  <Link target='_blank' href="https://vercel.com/abdul-salams-projects-29c00320/blog-website-tailwind-css">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;
