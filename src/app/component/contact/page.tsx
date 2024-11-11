"use client";
import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <section className="text-black body-font relative">
        <div className="container m-4 px-6 py-10 mx-auto flex flex-wrap justify-center sm:flex-nowrap">
          <div className="w-full md:w-1/2 mb-[26px] rounded-lg overflow-hidden sm:mr-6 md:mr-6 p-4 sm:p-4 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="450px"
              className="absolute -inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14482.149123200355!2d67.14796087967336!3d24.84549296686452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a41c56bec25%3A0x8d2d62302faf98e8!2sJamia%20Darul%20Uloom%20Karachi!5e0!3m2!1sen!2s!4v1730099591968!5m2!1sen!2s"
              style={{ filter: "contrast(3.2) opacity(0.8)" }}
            />
            <div className="bg-white relative flex flex-wrap mb-16 py-0 px-6 rounded-lg sm:px-4  shadow-md w-full">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Korangi 5, Industrial area, Karachi, Pakistan</p>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-500 leading-relaxed">salamabsul466@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">0311-3050866</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white flex flex-col md:ml-auto md:py-6 mt-6 md:mt-0 p-4 sm:p-6">
            <h2 className="title-font sm:text-3xl text-2xl mb-2 font-medium text-gray-900">Contact</h2>
            <p className="leading-relaxed mb-2 text-black">Feel free to contact me.</p>
            <form target='_blank' action="https://formspree.io/f/movqeqwj" method="POST">
              <div className="relative mb-1">
                <label htmlFor="name" className="leading-7 text-sm text-black">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-1">
                <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-1">
                <label htmlFor="subject" className="leading-7 text-sm text-black">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-1">
                <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-0 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <button className="text-gray-100 bg-black border-0 py-1  mb-10 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
