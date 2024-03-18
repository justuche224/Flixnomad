"use client";

import { useState } from "react";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode subject and message for mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Construct the mailto link
    const mailtoLink = `mailto:donaldamoke@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;

    // Open the mailto link in a new tab
    window.open(mailtoLink, "_blank");

    // Optional: Clear form after submission
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-[#090e3b] p-8 rounded-lg shadow-md text-black">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-200 font-semibold mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-200 font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
