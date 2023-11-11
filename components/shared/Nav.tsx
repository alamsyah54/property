"use client";

import Link from "next/link";
import { RiBuilding2Fill } from "react-icons/ri";
import { nav } from "@/constants";

const Nav = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   const isScrollingDown = prevScrollPos < currentScrollPos;

  //   if (currentScrollPos <= 0) {
  //     // If at the top of the page, make the navbar always visible
  //     setVisible(true);
  //   } else {
  //     setVisible(isScrollingDown);
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block md:block top-0 fixed left-0 w-full p-3 border-b border-white/70 bg-white/50 backdrop-blur-sm shadow-md shadow-gray-500/10 z-10">
        <div className="flex items-center justify-center lg:justify-evenly md:justify-evenly ">
          <Link
            href="/"
            className="flex items-center justify-center text-gray-800 px-5"
          >
            <RiBuilding2Fill className="text-4xl mx-2 drop-shadow text-secondary" />
            <span className="font-bold drop-shadow text-xl text-secondary">
              Property
            </span>
          </Link>
          <div className="flex-between lg:gap-10 gap-7  items-center px-5 ">
            <ul className="flex gap-10 font-bold">
              {nav.map((nav) => (
                <li className="group py-2">
                  <Link
                    key={nav.title}
                    className="py-2 px-2 hover:bg-gray-300/40 rounded-full"
                    href={nav.href}
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
      <nav className="lg:hidden md:hidden z-10 flex justify-evenly fixed bottom-0 left-0 w-full">
        <div className="flex items-center justify-center backdrop-blur-sm bg-white/30 border border-white/70 mb-5 ">
          <ul className="gap-2 flex items-center justify-center">
            {nav.map((nav) => (
              <li className="hover:text-primary font-black flex items-center justify-center">
                <Link
                  key={nav.title}
                  className=" text-black text-3xl hover:bg-white/50 p-2"
                  href={`${nav.href}`}
                >
                  <div className="flex justify-center items-center text-primary">
                    {nav.mobileIcon}
                    <p className="font-thin text-base px-1 text-black">
                      {nav.title}
                    </p>
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
