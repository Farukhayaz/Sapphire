import React from 'react'
import Unstiched from './unstiched'
import Readyfun from './ready'
import Westfun from './west'
import Manfun from './man'
import Kidseastfun from './kidseast'
import Homefun from './home'
import Sleepfun from './sleep'
import Accessoriesfun from './accessories'
import Footer from '../components/footer'

export default function all() {
  return (
    <>
      <Unstiched />
      <Readyfun />
      <Westfun />
      <Manfun />
      <Kidseastfun />
      <Homefun />
      <Sleepfun />
      <Accessoriesfun />
      {/* <Footer /> */}
    </>
  )
}
