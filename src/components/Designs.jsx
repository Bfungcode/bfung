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
    <>
      {isLarge ? (
        <>
          {" "}
          <div className="w-full pt-0 pb-0 border-t-2 border-black">
            <div className="w-full h-full flex flex-col flex-wrap">
              <div className="w-full h-[80px]  font-secondary text-3xl border-b-2 text-center flex flex-row justify-center items-center border-black">
                <div className="h-full w-[30%]  text-black border-2 border-white text-[62px] flex justify-center items-center">
                  Designs
                </div>
                <div className="h-full w-[70%]">
                  <img
                    src="/Rectangle10.png"
                    className="w-full h-full border-l-2 border-black"
                  ></img>
                </div>
              </div>
              <div className="w-full h-[100%] p-1">
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
          </div>
        </>
      ) : (
        <>
          <div className="w-full  flex flex-col flex-wrap">
            <div className="w-full h-[80px] flex flex-row flex-wrap justify-center items-center border-b-2  border-black">
              <div className="w-[35%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold">
                Designs
              </div>
              <div className="w-[65%] h-full border-l-2 border-black ">
                <img src="/Rectangle10.png" className="w-full h-full"></img>
              </div>
            </div>
            <div className="w-full h-full flex flex-col flex-wrap p-1">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={false}
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
      )}
    </>
  );
};

export default Designs;
