import React from 'react'
import groupPeople from '../../assets/img/group-people.png'

const Social = () => {
  return (
    <div className='mt-[42px]'>
            <div className='w-[50%] h-[48px] accordian flex items-center justify-around cursor-pointer'>
                <span>
                    <img src={groupPeople} alt="groupPeople" />
                </span>
                <h4 className='text-[16px] bold color-white leading-[24px]'>Social</h4>

            </div>
        </div>
  )
}

export default Social