import React from 'react'
import home from '../assets/img/house.png'
import ball from '../assets/img/ball.png'
import plus from '../assets/img/plus.png'
import tick from '../assets/img/tick.png'
import time from '../assets/img/time.png'
import singlePerson from '../assets/img/single-person.png'
import groupPeople from '../assets/img/group-people.png'
import whiteh from '../assets/img/whiteh.png'
import camera from '../assets/img/camera.png'
import setting from '../assets/img/setting.png'
import exist from '../assets/img/exist.png'

const SideBar = () => {
  return (
    <section className='px-[27.6px] mt-[89px] w-[5.48%] z-10'>
        <span>
            <img src={home} alt="home" />
        </span>
        <span>
            <img className='mt-[30px]' src={ball} alt="ball" />
        </span>
        <span>
            <img className='mt-[30px]' src={plus} alt="plus" />
        </span>
        <span>
            <img className='mt-[30px]' src={tick} alt="tick" />
        </span>
        <span>
            <img className='mt-[30px]' src={time} alt="time" />
        </span>
        <span>
            <img className='mt-[68px]' src={singlePerson} alt="singlePerson" />
        </span>
        <span>
            <img className='mt-[30px]' src={groupPeople} alt="groupPeople" />
        </span>
        <span>
            <img className='mt-[30px]' src={whiteh} alt="whiteh" />
        </span>
        <span>
            <img className='mt-[30px]' src={camera} alt="camera" />
        </span>
        <span>
            <img className='mt-[68px]' src={setting} alt="setting" />
        </span>
        <span>
            <img className='mt-[30px]' src={exist} alt="exist" />
        </span>
    </section>
  )
}

export default SideBar