import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-8 mb-4">
        {/* Social Media Links */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
          Instagram
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
          LinkedIn
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Basement. All Rights Reserved.
      </p>
    </div>
  </footer>
);
};

export default Footer