import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
const Designs = ({ isLarge }) => {
  return (
    <>
      {isLarge ? (
        <>
          <div className="w-full pt-0 pb-0 border-t-2 border-black">
            <div className="w-full h-full flex flex-col flex-wrap">
              <div className="w-full h-[80px]  font-secondary text-3xl border-b-2 text-center flex flex-row justify-center items-center border-black">
                <div className="h-full w-[30%]  text-black  text-[62px] flex justify-center items-center">
                  Designs
                </div>
                <div className="h-full w-[70%]">
                  <img
                    src="/Rectangle10.webp"
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
                    <img src="/dp/dp1.webp" loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/dp/dp2.webp" loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/dp/dp3.webp" loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/dp/dp4.webp" loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/dp/dp5.webp" loading="lazy" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/dp/dp6.webp" loading="lazy" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full  flex flex-col flex-wrap">
            <div className="w-full h-[60px] flex flex-row flex-wrap justify-center items-center border-b-2  border-black ">
              <div className="w-[40%] h-full flex text-center justify-center items-center text-[24px] md:text-[42px] font-secondary  font-bold bg-white">
                Designs
              </div>
              <div className="w-[60%] h-full border-l-2 border-black bg-white">
                <img src="/Rectangle10.webp" className="w-full h-full"></img>
              </div>
            </div>
            <div className="w-full h-full flex flex-col flex-wrap ">
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
                  <img src="/dp/dp1.webp" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp2.webp" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp3.webp" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp4.webp" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp5.webp" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/dp/dp6.webp" loading="lazy" />
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
