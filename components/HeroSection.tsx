import { Roboto } from "next/font/google";
import { GrNotes } from "react-icons/gr";
import { FiLayers } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";

const roboto_black = Roboto({
  subsets: ["latin"],
  style: "italic",
  weight: "900",
});

const HeroSection = () => {
  return (
    <section id="hero" className="duration-500 w-full">
      <div className="hidden lg:flex max-w-screen max-sm:flex-col h-screen min-w-full lg:pt-[75px]">
        <div className="w-full p-10">
          <div className="w-full h-full flex flex-center">
            <div className="flex gap-10 w-full h-full">
              <div className="flex flex-col h-full px-3 w-full justify-center rounded-3xl gap-10">
                <div
                  className="h-[65%] rounded-3xl flex shadow-black/25 shadow-lg bg-gray-500 p-5 bg-no-repeat bg-cover bg-center"
                  style={{
                    background:
                      "url(https://static.wixstatic.com/media/ad9f2a_0e940ad80f1d473c97c6a5c27e266363~mv2.jpg/v1/fit/w_1204,h_793,q_90/ad9f2a_0e940ad80f1d473c97c6a5c27e266363~mv2.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                  }}
                ></div>
                <div
                  className="h-full rounded-3xl flex shadow-black/25 shadow-lg p-5 bg-no-repeat bg-cover bg-center"
                  style={{
                    background:
                      "url(https://static.wixstatic.com/media/ad9f2a_ba1a0325754c4a5c980e966fe37e5558~mv2.jpg/v1/fit/w_1204,h_793,q_90/ad9f2a_ba1a0325754c4a5c980e966fe37e5558~mv2.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="relative left-0 w-fit max-md:hidden max-sm:hidden -mt-[130px] ">
                    <div
                      className={`text-3xl italic border-2 !rounded-3xl px-3 py-1 shadow-black/70  drop-shadow-md  glassmorphism !bg-white/50 `}
                    >
                      <h1 className={`${roboto_black.className} p-3`}>
                        House For Sale In
                        <br /> Chiang Mai, Thailand
                      </h1>
                      <p className="font-light text-sm px-3 italic rounded-2xl">
                        New house for sale with swimming pool.
                        <br />
                        Fully furnished, Mountain view, Mae Rim,
                        <br />
                        Chiang Mai With 14.9 million baht, Best value price.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="lg:w-[45%] rounded-3xl flex shadow-black/25 shadow-lg bg-gray-500 overflow-hidden p-5 bg-no-repeat bg-cover bg-center"
                style={{
                  background:
                    "url(https://static.wixstatic.com/media/ad9f2a_ed900a78033247f3845cdc7fe4904768~mv2.jpg/v1/fit/w_1120,h_793,q_90/ad9f2a_ed900a78033247f3845cdc7fe4904768~mv2.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="italic font-black">
                  <h1 className="pl-3 py-2 my-2 flex items-center bg-white/50 rounded-2xl">
                    <GrNotes className="text-3xl mr-2" />
                    Free Registration
                    <br /> No Hidden Fees
                  </h1>
                  <h1 className="pl-3 py-2 my-2 flex items-center bg-white/50 rounded-2xl">
                    <FiLayers className="text-3xl mr-2" />
                    Property Apparaisal
                    <br /> Free Of Charge
                  </h1>
                  <h1 className="pl-3 py-2 my-2 flex items-center bg-white/50 rounded-2xl">
                    <GrMapLocation className="text-3xl mr-2" />
                    Large Coverage
                    <br /> Offices In 2 Locations
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
