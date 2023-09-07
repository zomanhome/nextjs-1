import React from 'react';

const Navbar = () => (
  <nav className="">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold">
          Icon
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        Menu
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-white md:p-0 md:text-blue-700"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:text-blue-700"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:text-blue-700"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-gray-900 md:border-0 md:p-0 md:hover:text-blue-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export { Navbar };
