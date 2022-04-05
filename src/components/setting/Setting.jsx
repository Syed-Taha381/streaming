import React from 'react'
import Line from './Line'
import Profile from './Profile'
import Streming from './Streming'

const Setting = () => {
  return (
    <section className='flex w-full ml-[45px] mt-[85px] z-10'>
        <Profile />
        <Line />
        <Streming />
    </section>
  )
}

export default Setting