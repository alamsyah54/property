import { GoHome } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { PiInfoBold } from "react-icons/pi";
import { LuContact } from "react-icons/lu";

export const nav = [
  {
    title: "Home",
    idSection: "#home",
    mobileIcon: <GoHome />,
  },
  {
    title: "Sales",
    idSection: "#sales",
    mobileIcon: <MdOutlineSell />,
  },
  {
    title: "About",
    idSection: "#about",
    mobileIcon: <PiInfoBold />,
  },
  {
    title: "Contact",
    idSection: "#contact",
    mobileIcon: <LuContact />,
  },
];
