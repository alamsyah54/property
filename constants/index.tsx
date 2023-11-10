import { GoHome } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { PiInfoBold } from "react-icons/pi";
import { LuContact } from "react-icons/lu";

export const nav = [
  {
    title: "Home",
    href: "/#home",
    mobileIcon: <GoHome />,
  },
  {
    title: "Sales",
    href: "/#sales",
    mobileIcon: <MdOutlineSell />,
  },
  {
    title: "About",
    href: "/#about",
    mobileIcon: <PiInfoBold />,
  },
  {
    title: "Contact",
    href: "/#contact",
    mobileIcon: <LuContact />,
  },
];
