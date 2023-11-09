"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { RiBuilding2Fill } from "react-icons/ri";
import { nav } from "@/constants/const";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    if (currentScrollPos <= 0) {
      // If at the top of the page, make the navbar always visible
      setVisible(true);
    } else {
      setVisible(isScrollingDown);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`max-sm:hidden fixed top-0 left-0 w-full p-3 transition-transform duration-500 transform  ${
          visible
            ? "translate-y-0 border-b border-gray-300/20"
            : "-translate-y-full"
        } bg-gray-50/30 backdrop-blur-sm shadow-md shadow-gray-500/10 z-10`}
      >
        <div className="flex items-center justify-center lg:justify-evenly md:justify-evenly ">
          <Link
            href="/"
            className="flex items-center justify-center text-gray-800 px-5"
          >
            <RiBuilding2Fill className="text-5xl mx-2 drop-shadow text-primary" />
            <span className="font-bold drop-shadow text-2xl text-primary">
              Property
            </span>
          </Link>
          <div className="flex-between lg:gap-10 gap-7  items-center px-5 ">
            <ul className="flex gap-10 font-bold">
              {nav.map((nav) => (
                <li className="group py-2">
                  <Link
                    key={nav.title}
                    className="group-hover:bg-gray-300/60 py-2 px-3 rounded-2xl"
                    href={`/${nav.idSection}`}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden md:hidden z-10 flex justify-evenly max-sm:fixed bottom-0 left-0 w-full transition-transform duration-500 transform mb-5 ${
          visible ? "-translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex rounded-full items-center justify-center py-2 px-2 shadow-md backdrop-blur-md bg-gray-100/30 border border-gray-300/50 ">
          <ul className="gap-1 flex items-center justify-center">
            {nav.map((nav) => (
              <li className="hover:bg-gray-300/40 rounded-full p-2 flex items-center justify-center">
                <Link
                  key={nav.title}
                  className=" rounded-2xl text-black text-3xl"
                  href={`/${nav.idSection}`}
                >
                  <div className="flex justify-center items-center">
                    {nav.mobileIcon}
                    <p className="font-thin text-base px-1">{nav.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
