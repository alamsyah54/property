"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
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

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme !== null ? storedTheme : "light";
    }
    return "light"; // Default theme for server-side rendering
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
            <RiBuilding2Fill className="text-5xl mx-2 dark:text-gray-200 drop-shadow" />
            <span className="dark:text-gray-200 font-bold drop-shadow text-2xl">
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
            <div className="flex items-center lg:flex-center text-3xl lg:text-4xl md:text-xl">
              <button
                onClick={handleThemeSwitch}
                className="relative items-center justify-center lg:p-2"
              >
                <BsSunFill className="absolute text-lg text-gray-800 opacity-0 dark:opacity-100 dark:text-gray-200 lg:text-xl" />
                <BsFillMoonStarsFill className="text-lg text-gray-800 dark:opacity-0 dark:text-gray-200 lg:text-xl " />
              </button>
            </div>
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
          <ul className="flex font-semibold text-lg ">
            {nav.map((nav) => (
              <li className="py-1 group">
                <Link
                  key={nav.title}
                  className="py-1 px-2 group-hover:bg-gray-300/60 rounded-2xl"
                  href={`/${nav.idSection}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleThemeSwitch}
            className="duration-500 relative items-center justify-center rounded-full bg-gray-900 dark:bg-gray-200 ml-2 p-2 "
          >
            <BsSunFill className="absolute text-gray-100 dark:text-gray-900 opacity-0 dark:opacity-100" />
            <BsFillMoonStarsFill className=" text-gray-100 dark:text-gray-900 dark:opacity-0 " />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
