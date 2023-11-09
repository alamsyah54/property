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
        } bg-gray-100/10 backdrop-blur-sm shadow-md shadow-gray-700/10 z-10`}
      >
        <div className="flex items-center justify-center  lg:justify-evenly md:justify-evenly ">
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
                <li className="group p-4 ">
                  <Link
                    key={nav.title}
                    className="group-hover:drop-shadow-lg"
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
        className={`lg:hidden md:hidden z-10 flex-center p-4 max-sm:fixed bottom-0 left-0 w-full transition-transform duration-500 transform ${
          visible ? "-translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex rounded-full items-center justify-center py-4 px-6 gap-3 shadow-md backdrop-blur-sm bg-gray-100/10 border border-gray-300/50">
          <ul className="flex text-lg font-semibold gap-1">
            {nav.map((nav) => (
              <li>
                <Link
                  key={nav.title}
                  className="p-3"
                  href={`/${nav.idSection}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleThemeSwitch}
            className="relative items-center justify-center"
          >
            <BsSunFill className="absolute  text-xl opacity-0 dark:opacity-100" />
            <BsFillMoonStarsFill className=" text-xl dark:opacity-0 " />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
