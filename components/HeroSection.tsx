"use client";

import { Roboto } from "next/font/google";
import { PiNoteLight } from "react-icons/pi";
import { FiLayers } from "react-icons/fi";
import { BiMapPin } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const roboto_black = Roboto({
  subsets: ["latin"],
  style: "italic",
  weight: "900",
});
// https://coolors.co/palette/ffe169-fad643-edc531-dbb42c-c9a227-b69121-ad881e-a47e1b-926c15-805b10
// https://coolors.co/palette/ffe169-fad643-edc531-dbb42c-b69121-a47e1b-926c15
const HeroSection = () => {
  return (
    <AnimatePresence mode="wait">
      <section id="hero" className="duration-500 w-full">
        <div className="hidden lg:flex max-w-screen max-sm:flex-col h-screen min-w-full">
          <div className="w-full">
            <div className="w-full h-full flex flex-center">
              <div className="flex w-full h-full">
                <div className="flex flex-col h-full w-full justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 1,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false }}
                    className="h-[65%] flex bg-gray-500 p-5 bg-no-repeat bg-cover bg-center"
                    style={{
                      background:
                        "url(https://static.wixstatic.com/media/ad9f2a_0e940ad80f1d473c97c6a5c27e266363~mv2.jpg/v1/fit/w_1204,h_793,q_90/ad9f2a_0e940ad80f1d473c97c6a5c27e266363~mv2.webp)",
                      backgroundSize: "cover",
                      backgroundPosition: "bottom center",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 2.4,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false }}
                    className="h-full flex p-5 bg-no-repeat bg-cover bg-center"
                    style={{
                      background:
                        "url(https://static.wixstatic.com/media/ad9f2a_ba1a0325754c4a5c980e966fe37e5558~mv2.jpg/v1/fit/w_1204,h_793,q_90/ad9f2a_ba1a0325754c4a5c980e966fe37e5558~mv2.webp)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                    <div className="relative left-0 w-fit max-md:hidden max-sm:hidden -mt-[130px] ">
                      <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        transition={{
                          duration: 1.6,
                        }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: false }}
                        drag
                        dragConstraints={{
                          top: -50,
                          left: -50,
                          right: 50,
                          bottom: 50,
                        }}
                        className={`border-2 !rounded-3xl px-3 py-1 !bg-white/60 glassmorphism`}
                      >
                        <h1
                          className={`${roboto_black.className} p-3 text-primary text-5xl`}
                        >
                          House <span className="text-white">For Sale</span> In
                          <br /> Chiang Mai, Thailand
                        </h1>
                        <p className="font-light text-lg px-3 rounded-2xl ">
                          New house for sale with swimming pool.
                          <br />
                          Fully furnished, Mountain view, Mae Rim,
                          <br />
                          Chiang Mai With 14.9 million baht, Best value price.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  transition={{
                    duration: 1.7,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false }}
                  className="lg:w-[45%] flex bg-gray-500 overflow-hidden p-5 bg-no-repeat bg-cover bg-center "
                  style={{
                    background:
                      "url(https://static.wixstatic.com/media/ad9f2a_ed900a78033247f3845cdc7fe4904768~mv2.jpg/v1/fit/w_1120,h_793,q_90/ad9f2a_ed900a78033247f3845cdc7fe4904768~mv2.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="font-light pt-16">
                    <motion.h1
                      className="px-3 py-2 my-2 text-md flex items-center bg-white/50 rounded-2xl hover:bg-white/80"
                      initial={{ opacity: 0, y: 50 }}
                      transition={{
                        duration: 1.5,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                    >
                      <PiNoteLight className="text-4xl mr-2 text-tertiary" />
                      <p className="text-black">
                        Free Registration
                        <br /> No Hidden Fees
                      </p>
                    </motion.h1>
                    <motion.h1
                      className="px-3 py-2 my-2 text-md flex items-center bg-white/50 rounded-2xl hover:bg-white/80"
                      initial={{ opacity: 0, y: 60 }}
                      transition={{
                        duration: 2.3,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                    >
                      <FiLayers className="text-4xl mr-2 text-tertiary" />
                      <p className="text-black">
                        Property Apparaisal
                        <br /> Free Of Charge
                      </p>
                    </motion.h1>
                    <motion.h1
                      className="px-3 py-2 my-2 text-md flex items-center bg-white/50 rounded-2xl hover:bg-white/80"
                      initial={{ opacity: 0, y: 70 }}
                      transition={{
                        duration: 3.2,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                    >
                      <BiMapPin className="text-4xl mr-2 text-tertiary" />
                      <p className="text-black">
                        Large Coverage
                        <br /> Offices In 2 Locations
                      </p>
                    </motion.h1>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default HeroSection;
