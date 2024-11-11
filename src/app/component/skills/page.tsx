"use client"
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 md:mb-10">
            <h2 className="text-xs text-black tracking-widest font-medium title-font -mb-2">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-2 md:-m-4">
            {/* HTML */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[94%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">94%</p>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* TypeScript/JavaScript */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">TypeScript/JavaScript</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">80%</p>
                </div>
              </div>
            </div>

            {/* Next.js */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Next.js</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[65%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">65%</p>
                </div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Tailwind CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">90%</p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-6 md:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">UI/UX</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-gray-900 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-gray-900 text-right">60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
