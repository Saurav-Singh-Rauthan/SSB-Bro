import React from 'react';
import { Link } from 'react-router-dom';

function Header(): React.JSX.Element {
  return (
    <nav className="flex justify-between bg-white p-0 shadow sticky top-0 z-50 h-20">
      <Link to="#" className="flex items-center px-4 ml-4">
        <img className="h-5/6 rounded-55" src="../../public/Logo.jpg" />
        <h2 className="m-0 mx-4 text-gray-900 font-bold text-3xl">
          SSB <span className="text-red-700">BRO</span>
        </h2>
      </Link>
      <div className="flex items-center mr-4">
        <div className="text-lg font-medium">
          <Link to="#" className="text-gray-700 hover:text-gray-900 mr-4">
            Home
          </Link>
          <Link to="#" className="text-gray-700 hover:text-gray-900 mr-4">
            About
          </Link>
          <Link to="#" className="text-gray-700 hover:text-gray-900 mr-4">
            Courses
          </Link>
          <Link to="#" className="text-gray-700 hover:text-gray-900 mr-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
