import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
const Designs = ({ isLarge }) => {
  const [num, setNum] = useState(1);
  const handleNext = () => {
    if (num < 6) {
      setNum(num + 1);
    }
  };
  const handlePrevious = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  return (
    <div className="w-screen  p-4 pt-0 pb-0">
      {isLarge ? (
        <>
          <div className="w-full h-full border-2 border-black border-t-0 flex flex-col flex-wrap">
            <div className="w-full h-[109px]  font-secondary text-[52px] border-b-2 text-center flex flex-row justify-center items-center border-black">
              <div className="h-full w-[30%] bg-black text-white border-2 border-white text-[62px] flex justify-center items-center">
                Designs
              </div>
              <div className="h-full w-[70%]">
                <img
                  src="/Rectangle10.png"
                  className="w-full h-full border-l-2 border-black"
                ></img>
              </div>
            </div>
            <div className="w-full h-[100%] p-2">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img src="/dp/dp1.png" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp2.png" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp3.png" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp4.png" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp5.png" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp6.png" loading="lazy" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-full border-2 border-black border-t-0 flex flex-col flex-wrap">
            <div className="w-full h-[119px] bg-black text-white font-secondary text-[52px] text-center flex justify-center items-center border-2 border-white">
              Designs
            </div>
            <div className="w-full h-[75%] flex flex-col flex-wrap ">
              <div className="w-full h-[80%]">
                <img src={`/dp/dp${num}.png`} className="w-full h-[100%]"></img>
              </div>
              <div className="w-full h-[20%] flex flex-row flex-wrap justify-around items-center pt-2 pb-2">
                {num <= 1 ? (
                  <div onClick={handlePrevious} className="opacity-50">
                    Previous
                  </div>
                ) : (
                  <div onClick={handlePrevious}>Previous</div>
                )}
                {num >= 6 ? (
                  <div onClick={handleNext} className="opacity-50">
                    Next
                  </div>
                ) : (
                  <div onClick={handleNext}>Next</div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Designs;
