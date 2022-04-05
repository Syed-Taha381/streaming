import React from 'react'
import money from '../../assets/img/money.png'

const Member = () => {
    return (
        <div className='mt-[42px]'>
            <div className='w-[97%] h-[48px] accordian flex items-center justify-around cursor-pointer'>
                <span>
                    <img src={money} alt="money" />
                </span>
                <h4 className='text-[16px] bold color-white leading-[24px]'>Membership & Billing</h4>

            </div>
        </div>
    )
}

export default Member