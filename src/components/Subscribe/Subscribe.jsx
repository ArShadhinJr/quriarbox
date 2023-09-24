import React from 'react'

const Subscribe = () => {
  return (
      <div className='bg-[#222132]'>
          <div className='container py-[95px] flex'>
              <div className='w-7/12'>
                  <h3 className='text-white text-[40px] font-extrabold'>Get an update every week</h3>
                  <p className='max-w-[500px] text-gray-400'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
              </div>
              <div className='w-5/12'>
                  <p className='text-primary text-[18px] font-bold'>SUBSCRIBE TO NEWSLETTER</p>
                  <div className='flex gap-x-3'>
                      <input className='w-full px-[20px] py-[15px] bg-transparent rounded-lg border border-gray-400' type="email" placeholder='Enter your email' /> 
                      <button className='btn btn-orange'>SUBSCRIBE</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Subscribe