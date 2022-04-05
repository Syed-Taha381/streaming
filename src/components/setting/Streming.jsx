import React, { useState } from 'react'
import arrow from '../../assets/img/arrow.png'

const Streming = () => {
    
    const [checked, setChecked] = useState(true);

    return (
        <div className='ml-[114px] mt-[84px] w-[52.2%]'>
            <h2 className='text-[32px] leading-[48px] color-white mega-bold'>Streaming</h2>
            <p className='text-[14px] color-ligh-blue mt-[12px]'>{`Parental Control > Josef Braun > Streaming`}</p>

            <div className='w-[85.5%] mt-[53px]'>
                <div className='flex justify-between'>
                    <p className='text-[16px] leading-[24px] bold color-white'>Allow to stream with other people</p>
                    <label className='switch'>
                        <input className='input' type="checkbox" onChange={() => setChecked(!checked)} defaultChecked={checked} />
                        <span className='round slider'></span>
                    </label>
                </div>
                <div className='flex justify-between items-center mt-[36px]'>
                    <p className='text-[16px] leading-[24px] bold color-white'>Allow to stream with</p>
                    <div className='w-[335px] h-[48px] anyone flex justify-between items-center cursor-pointer'>
                        <p className='text-[16px] leading-[24px] bold color-white'>Anyone</p>
                        <span>
                            <img src={arrow} alt="Arrow" className='mr-[14px]' />
                        </span>
                    </div>
                </div>
                <div className='mt-[48px]'>
                    <p className='text-[16px] leading-[24px] bold color-white'>Exceptions</p>
                    <div className='w-[155px] h-[44px] add-button mt-[12px] text-[16px] leading-[24px] bold color-white flex justify-center items-center cursor-pointer'>
                        Add Exception
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Streming