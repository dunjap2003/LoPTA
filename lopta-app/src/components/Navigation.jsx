import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiMap } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';

const Navigation = () => {
  const navigationItems = [
    { link: 'Journey Route', path: 'journeyRoute' },
    { link: 'Analysis Results', path: 'analysisResults' }
  ];

  return (
    <nav>
      <div>
        <div className="space-x-14 flex justify-between items-center mr-4">
          <Link to="/" className="text-5xl font-bold flex items-center space-x-3">
            <img src={logo} alt="" className="object-fill h-16 w-16" />
            <span>LoPTA</span>
          </Link>

          <ul className="flex space-x-28 items-center text-3xl">
            <li className="hover:text-green-800">
              <Link to={navigationItems[0].path} className="block flex items-center">
                <CiMap className="text-4xl" />
                {navigationItems[0].link}
              </Link>
            </li>
            <li className="hover:text-green-800">
              <Link to={navigationItems[1].path} className="block flex items-center">
                <GoGraph className="text-3xl" />
                {navigationItems[1].link}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;