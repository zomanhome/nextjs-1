'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const menu = [
    // { name: 'About', url: '#about' },
    // { name: 'Services', url: '#services' },
    // { name: 'Career', url: '#career' },
    { name: 'Gallery', url: '#gallery' },
    // { name: 'Contacts', url: '#contacts' },
  ];

  return (
    <nav
      className={`w-full bg-transparent ${
        navbar ? 'backdrop-blur-3xl' : 'backdrop-blur-none'
      }`}
    >
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          {navbar ? (
            <div className="h-10"></div>
          ) : (
            <Link href="/">
              <div className="flex h-10 flex-col text-white">
                <img
                  src={`${router.basePath}/assets/images/logo.svg`}
                  alt="LOGO"
                />
                <span className="font-logo text-sm md:text-base">
                  CarpTravel
                </span>
              </div>
            </Link>
          )}
          <div className="md:hidden">
            <button className="text-white" onClick={() => setNavbar(!navbar)}>
              {navbar ? <div>CLOSE</div> : <div>MENU</div>}
            </button>
          </div>
        </div>
        <div
          className={`mt-8 h-[calc(100vh-6rem)] flex-1 justify-self-center pb-3 md:mt-0 md:block md:h-fit md:pb-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex h-[calc(60vh)] flex-col items-center justify-around space-y-4 md:h-fit md:flex-row md:justify-end md:space-x-6 md:space-y-0">
            {menu.map(({ name, url }, index) => (
              <li
                key={index}
                className="text-center font-menu text-3xl text-white md:text-xl"
              >
                <Link
                  href={url}
                  scroll={false}
                  onClick={() => setNavbar(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
