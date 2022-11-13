import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="/logo.png" className="w-36" alt="" />
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/login"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Login
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/dashboard"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
