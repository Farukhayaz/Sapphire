import React from 'react'
import { Home } from '../components/data'
import { Sticker } from '../components/data'
import { useState } from 'react'

export default function Homefun() {
  function changeIndex(e, i) {
    e.target.style.backgroundImage = `url(${Home[i].hoverimg})`
  }
  function returnIndex(e, i) {
    e.target.style.backgroundImage = `url(${Home[i].img})`
  }
  return (
    <>
      <div className='container-fluid'>
        {
          Home.map((ele, i) => {
            return (
              <div className="w-[335px] mx-auto px-2 py-3 border-gray-200 border-opacity-60" >
                <div className='cardimg h-[420px] w-[10px]' key={i} onMouseEnter={e => changeIndex(e, i)} onMouseLeave={e => returnIndex(e, i)} style={{ backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%" }} >
                  {
                    Sticker.map((ele, i) => {
                      return (<img src={ele.img} style={{ height: "70px", width: "70px", marginLeft: "77%", marginTop: "2%" }} />)
                    })
                  }
                  <button>Add to bag</button>
                </div>
                <p className='text-center' style={{ marginTop: "30px" }}>{ele.category}</p>
                <p className='text-center'>Rs. {ele.price}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
