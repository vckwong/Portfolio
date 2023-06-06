import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800">
        <div className="container mx-auto py-4 px-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Projects</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8 px-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="flex items-center mb-4">
            <FaLinkedin size={24} className="mr-2" />
            <FaGithub size={24} className="mr-2" />
            <FaEnvelope size={24} className="mr-2" />
            <FaPhone size={24} className="mr-2" />
          </div>
          <p>Welcome to my portfolio website! I am Vincent C K Wong, a web developer passionate about creating clean and modern websites.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-bold">Web Developer</h3>
              <p className="text-gray-600">ABC Company, 2018 - Present</p>
              <p>I am responsible for developing and maintaining web applications using modern technologies.</p>
            </li>
            <li>
              <h3 className="text-lg font-bold">Frontend Developer</h3>
              <p className="text-gray-600">XYZ Agency, 2015 - 2018</p>
              <p>I worked on various projects, creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript.</p>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Project 1</h3>
              <p className="text-gray-600">Description of project 1.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Project 3</h3>
              <p className="text-gray-600">Description of project 3.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
              <p className="text-gray-600">I'd love to hear from you! Send me a message, and I'll get back to you as soon as possible.</p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                  <input type="text" id="name" className="border rounded-md px-4 py-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                  <input type="email" id="email" className="border rounded-md px-4 py-2 w-full" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                  <textarea id="message" className="border rounded-md px-4 py-2 w-full h-32"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Information</h3>
              <p className="text-gray-600 mb-4">Feel free to contact me using the information below:</p>
              <ul className="space-y-2">
                <li><span className="font-bold">Email:</span> example@example.com</li>
                <li><span className="font-bold">Phone:</span> (123) 456-7890</li>
                <li><span className="font-bold">Address:</span> 123 Main St, City, Country</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-8 flex justify-center items-center">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mx-2">
            <FaGithub size={24} />
          </a>
          <a href="mailto:example@example.com" className="text-white hover:text-gray-300 mx-2">
            <FaEnvelope size={24} />
          </a>
          <a href="tel:+1234567890" className="text-white hover:text-gray-300 mx-2">
            <FaPhone size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
