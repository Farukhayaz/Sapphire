import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { SwiperImg1 } from './data';
import { SwiperImg2, logo } from './data';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [myheading, setmyheading] = useState("PARTY")
  const [myclass, setmyclass] = useState("no")


  return (
    <>
      <div>
        <h1 className='lg:text-[43px] md:text-[43px] text-[25px] text-center p-4'>{logo.h1}</h1>
        <hr className='w-[97%] mx-auto' />
        <div >
          <ul className='lg:w-[68%]  w-[auto] text-center md:w-[90%] mt-2  lg:flex md:flex justify-around mx-auto text-[18px] cursor-pointer'>
            <li>{logo.li[0]}</li>
            <li>{logo.li[1]}</li>
            <li>{logo.li[2]}</li>
            <li>{logo.li[3]}</li>
            <li>{logo.li[4]}</li>
            <li>{logo.li[5]}</li>
            <li>{logo.li[6]}</li>
            <li>{logo.li[7]}</li>
            <li>{logo.li[8]}</li>


          </ul>
        </div>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container py-14  mx-auto">
            <div class="lg:w-[88%]   mx-auto flex flex-wrap">
              <div className='flex flex-col text-center justify-center ' >
                <p style={{ fontSize: "35px", fontWeight: "400" }}>{myheading}</p>
                <p style={{ fontSize: "35px", fontWeight: "400" }}>COLLECTION</p>
              </div>
              <div class="lg:w-[80%] w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0 ">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                  <SwiperSlide>{
                    SwiperImg1.map((ele, i) => {
                      return (
                        <>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={ele.img} style={{ borderRadius: "50%", padding: "10px", height: "150px", width: "150px" }} />
                            <Link style={{ textDecoration: "none", color: "black", marginTop: "10px" }} to={`${ele.para}`} onClick={(e) => {
                              setmyheading(ele.para)
                              console.log("hello", e.target.innerText)
                              if (e.target.innerText != ele.para)
                                e.target.style.fontWeight = "normal"

                              else
                                e.target.style.textDecoration = "underline"
                              e.target.style.fontWeight = "bold"

                            }}>{ele.para}</Link>
                          </div>
                        </>
                      )
                    })
                  }</SwiperSlide>
                  <SwiperSlide>{
                    SwiperImg2.map((ele, i) => {
                      return (
                        <>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <img src={ele.img} style={{ borderRadius: "50%", padding: "10px", height: "150px", width: "150px" }} />
                            <Link style={{ textDecoration: "none", color: "black", marginTop: "10px" }} to={`${ele.para}`}
                              onClick={() => {
                                setmyheading(ele.para)
                                console.log("hello", ele.para)
                              }}>{ele.para}</Link>
                          </div>
                        </>
                      )
                    })
                  }
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

      </div >
    </>
  )
}
