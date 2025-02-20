import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
    return (
      <div className="flex space-x-4">
        <a href="https://github.com/GuusAndrade" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-10 w-10 text-gray-800 hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-andrade-cruz/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-10 w-10 text-gray-800 hover:text-blue-600 transition duration-300" />
        </a>
      </div>
    );
  };

  export default SocialLinks;

