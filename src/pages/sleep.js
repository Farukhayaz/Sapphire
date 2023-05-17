import React from 'react'
import { Sleep } from '../components/data'
import { Sticker } from '../components/data'
import { useState } from 'react'

export default function Sleepfun() {
  function changeIndex(e, i) {
    e.target.style.backgroundImage = `url(${Sleep[i].hoverimg})`
  }
  function returnIndex(e, i) {
    e.target.style.backgroundImage = `url(${Sleep[i].img})`
  }

  return (
    <>

      <div className='container-fluid'>
        {
          Sleep.map((ele, i) => {
            return (
              <div className="w-[335px] mx-auto px-2 py-3 border-gray-200 border-opacity-60">
                <div className='cardimg h-[420px] w-[10px]' key={i} onMouseEnter={e => changeIndex(e, i)} onMouseLeave={e => returnIndex(e, i)} style={{ backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%" }} >
                  {
                    Sticker.map((ele, i) => {
                      return (<img src={ele.img} style={{ height: "70px", width: "70px", marginLeft: "75%", marginTop: "2%" }} />)
                    })
                  }
                  <button>Add to bag</button>
                </div>
                <p className='text-center' style={{ marginTop: "30px" }}>{ele.category}</p>
                <p className='text-center'>Rs.<del>{ele.price}</del>  Rs.<span style={{ color: "red" }}>{ele.price / 2}</span></p>
              </div>
            )
          })
        }
      </div>


      {/* <div className='container-fluid'>
        {
          Sleep.map((ele, i) => {
            return (
              <div className='card'>
                <div className='cardimg' key={i} onMouseEnter={e => changeIndex(e, i)} onMouseLeave={e => returnIndex(e, i)} style={{ height: "650px", width: "100%", backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%" }} >
                  {
                    Sticker.map((ele, i) => {
                      return (<img src={ele.img} style={{ height: "70px", width: "70px", marginLeft: "82%", marginTop: "3%" }} />)
                    })
                  }
                  <button>Add to bag</button>
                </div>
                <p style={{ marginTop: "30px" }}>{ele.category}</p>
                <p>Rs.<del>{ele.price}</del>  Rs.<span style={{ color: "red" }}>{ele.price / 2}</span></p>
              </div>
            )
          })
        }
      </div> */}
    </>
  )
}
