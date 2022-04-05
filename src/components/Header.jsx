import React from 'react'
import search from '../assets/img/search.png'
import bell from '../assets/img/bell.png'
import girl from '../assets/img/girl.png'
import light from '../assets/img/light.png'
import moon from '../assets/img/moon.png'

const Header = () => {
  return (
    <section className='px-[27px] py-[23px] max-width m-auto flex justify-between items-center'>
        <div className='w-[21.5%] bold text-[32px] color-white leading-[48px]'>Streaming!</div>
        <div className='w-[18.54%] flex justify-between items-center'>
            <span>
                <img src={search} alt="Search" />
            </span>
            <span>
                <img src={bell} alt="Bell" />
            </span>
            <span>
                <img src={girl} alt="Girl" />
            </span>
            <div className='w-[75px] h-[32px] bg-[#fff] shadow-head rounded-[20px] flex justify-around items-center'>
                <span>
                    <img src={light} alt="light" />
                </span>
                <span>
                    <img src={moon} alt="moon" />
                </span>
            </div>
        </div>
    </section>
  )
}

export default Header