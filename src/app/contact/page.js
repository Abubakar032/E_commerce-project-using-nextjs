"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="py-28 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1
        className="text-center text-gray-800 text-4xl font-bold mb-6"
        data-aos="fade-down"
      >
        Contact Us
      </h1>

      {/* Google Map */}
      <div
        className="w-full max-w-5xl mx-auto mb-12 shadow-lg rounded-lg overflow-hidden"
        data-aos="fade-up"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274330387!2d74.00471844300726!3d31.483103656420948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704270760104!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 mt-20">
        <h2
          className="text-2xl font-semibold text-gray-700 text-center mb-6"
          data-aos="fade-up"
        >
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            autoComplete="off"
            required
            data-aos="fade-up"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            autoComplete="off"
            required
            data-aos="fade-up"
            data-aos-delay="100"
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            data-aos="fade-up"
            data-aos-delay="200"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white text-lg font-semibold py-3 rounded-md shadow-md hover:bg-orange-600 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
