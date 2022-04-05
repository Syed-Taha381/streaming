import React from 'react'
import Account from './Account'
import Feedback from './Feedback'
import Member from './Member'
import Social from './Social'
import SubAcconut from './SubAcconut'

const Profile = () => {
  return (
    <section className='w-[20.8%]'>
        <div className='flex '>
            <h3 className='text-[20px] leading-[30px] regular color-white cursor-pointer'>My Profile</h3> 
            <h3 className='text-[20px] leading-[30px] regular color-blue relative ml-[48px] cursor-pointer'>Settings <span className='circle absolute -bottom-[3px] left-[3px] rounded-[50%]'></span></h3> 
        </div>
        <div className='mt-[47px]'>
            <Account />
            <Member />
            <SubAcconut />
            <Social />
            <Feedback />
        </div>
    </section>
  )
}

export default Profile