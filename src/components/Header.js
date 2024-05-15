import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className="flex items-center justify-between px-10 py-3 bg-violet-950 
      sticky top-0 shadow-lg z-50 text-white"
    >
      <a className="font-bold text-xl flex items-center gap-3" href="#">
        <img
          src="https://avatars.githubusercontent.com/u/117264451?v=4"
          className="w-8 h-8 rounded-full"
        />
        L Bala Guru
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#project">Projects</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col text-secondary fixed top-16 left-0 z-50
            bg-white w-full py-2 shadow-md
             space-y-3"
          >
            <li className="mobileLink">
              <a href="#">Home</a>
            </li>
            <li className="mobileLink">
              <a href="#about">About</a>
            </li>
            <li className="mobileLink">
              <a href="#project">Projects</a>
            </li>
            <li className="mobileLink">
              <a href="/#skills">Skills</a>
            </li>
            <li className="mobileLink">
              <a href="/#experience">Experience</a>
            </li>
            <li className="mobileLink">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        {toggleMenu ? (
          <XMarkIcon className="text-white h-5" />
        ) : (
          <Bars3Icon className="text-white h-5" />
        )}
      </button>
    </header>
  );
}
