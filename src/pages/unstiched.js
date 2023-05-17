import React, { useEffect, useState } from 'react'
import { UnstichedData } from '../components/data'
import { Sticker } from '../components/data'
import Footer from '../components/footer'

export default function Unstiched() {
  function changeIndex(e, i) {
    e.target.style.backgroundImage = `url(${UnstichedData[i].hoverimg})`
    // e.targert.style.transform = scale(1.2)    
  }
  function returnIndex(e, i) {
    e.target.style.backgroundImage = `url(${UnstichedData[i].img})`
  }

  return (
    <>
      <div className='container-fluid'>
        {
          UnstichedData.map((ele, i) => {

            return (
              // <div className='card' >
              //   <div className='cardimg' key={i} onMouseEnter={e => changeIndex(e, i)} onMouseLeave={e => returnIndex(e, i)} style={{ height: "650px", width: "100%", backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%" }} >

              //     {
              //       Sticker.map((ele, i) => {
              //         return (<img src={ele.img} style={{ height: "70px", width: "70px", marginLeft: "70%", marginTop: "3%" }} />)
              //       })
              //     }
              //     <button>Add to bag</button>
              //   </div>
              //   <p style={{ marginTop: "30px" }}>{ele.category}</p>
              //   <p>Rs.<del>{ele.price}</del>  Rs.<span style={{ color: "red" }}>{ele.price / 2}</span></p>
              // </div>

              <div className="w-[335px] mx-auto px-2 py-3 border-gray-200 border-opacity-60">
                <div className='cardimg h-[420px] w-[10px]' key={i} onMouseEnter={e => changeIndex(e, i)} onMouseLeave={e => returnIndex(e, i)} style={{ backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%" }} >

                  {/* {
                    Sticker.map((ele, i) => {
                      return (<img src={ele.img} style={{ height: "70px", width: "70px", marginLeft: "75%", marginTop: "2%" }} />)
                    })
                  } */}
                  <button>Add to bag</button>
                </div>
                <p className='text-center' style={{ marginTop: "30px" }}>{ele.category}</p>
                <p className='text-center'>Rs. {ele.price} </p>
              </div>
            )
          })
        }
      </div>




      {/* <Footer /> */}
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
           
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </section>   */}
    </>
  )
}
