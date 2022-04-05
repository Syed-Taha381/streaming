import React from 'react'
import boxes from '../../assets/img/boxes.png'

const SubAcconut = () => {
    return (
        <div className='mt-[42px]'>
            <div className='w-[75%] h-[48px] accordian flex items-center justify-around cursor-pointer'>
                <span>
                    <img src={boxes} alt="boxes" />
                </span>
                <h4 className='text-[16px] bold color-white leading-[24px]'>Sub Accounts</h4>

            </div>
        </div>
    )
}

export default SubAcconut