import React from 'react'
import person from '../../assets/img/people.png'

const Account = () => {
  return (
    <div>
        <div className='w-[88%] h-[48px] accordian flex items-center justify-around cursor-pointer'>
            <span>
                <img src={person} alt="person" />
            </span>
            <h4 className='text-[16px] bold color-blue leading-[24px]'>Account Settings</h4>

        </div>
        <div className='w-[57.6%] flex flex-col items-start ml-[68px] mt-[54px]'>
            <p className='text-[16px] bold leading-[24px] color-blue'>Parental Control</p>
            <p className='text-[16px] bold leading-[24px] color-white mt-[24px]'>Email & Password</p>
            <p className='text-[16px] bold leading-[24px] color-white mt-[24px]'>Playback Settings</p>
            <p className='text-[16px] bold leading-[24px] color-white mt-[24px]'>Notifications</p>
        </div>
    </div>
  )
}

export default Account