import React from 'react'
import explanation from '../../assets/img/explanation.png'

const Feedback = () => {
    return (
        <div className='mt-[42px]'>
            <div className='w-[60%] h-[48px] accordian flex items-center justify-around cursor-pointer'>
                <span>
                    <img src={explanation} alt="explanation" />
                </span>
                <h4 className='text-[16px] bold color-white leading-[24px]'>Feedback</h4>

            </div>
        </div>
    )
}

export default Feedback