import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { urlSlidePictures } from "@/constants";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? urlSlidePictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === urlSlidePictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-80 w-full m-auto relative group">
      <div
        style={{
          backgroundImage: `url(${urlSlidePictures[currentIndex].url})`,
        }}
        className="w-full flex h-full bg-center bg-cover duration-500"
      >
        <div className="w-full hidden group-hover:flex justify-between">
          <div className="bg-white/25 text-white h-full flex items-center">
            <BsChevronCompactLeft
              onClick={prevSlide}
              size={30}
              className="h-full mx-4"
            />
          </div>
          <div className="bg-white/25 text-white h-full flex items-center">
            <BsChevronCompactRight
              onClick={nextSlide}
              size={30}
              className="h-full mx-4"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-5">
        {urlSlidePictures.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="px-2.5 py-[3px] group-hover:bg-white/70 mx-3"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
