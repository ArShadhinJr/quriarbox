import React from 'react'

const CounterItem = (props) => {
  return (
    <div className='md:w-1/5 text-center hover:bg-orange-100 p-5 hover:rounded-md '>
          <div className='grid place-content-center'>
              <div className='w-[60px] h-[60px]' >
              <img className='inline-block' src={props.svg}  />
            </div>
          </div>
          <h3 className='text-primary text-[40px] font-[800] leading-[110%] pt-[28px] pb-[8px]'>{props.title}</h3>
          <p className='text-gray-800 text-[20px]'>{props.desc}</p>
    </div>
  )
}

export default CounterItem