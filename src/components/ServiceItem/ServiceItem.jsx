import React from 'react'

const ServiceItem = (props) => {
  return (
    <div>
        <div className=' px-[60px] pt-[67px] pb-[60px] text-center bg-white rounded-lg'>
                  <img className='inline-block' src={props.img} alt="" />
                  <h3 className='text-sec text-[25px] py-[30px] font-900'>{props.title}</h3>
                  <p className='text-gray-500 mb-[30px]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                  <ul className=' pb-[50px] text-start list-disc list-inside text-primary'>
                      <li className='text-primary'><a className='text-gray-600' href="#">Corporate goods</a></li>
                      <li className='text-primary'><a className='text-gray-600' href="#">Shipment</a></li>
                      <li className='text-primary'><a className='text-gray-600' href="#">Accesories</a></li>
                  </ul>
                    <button className='btn btn-orange2 w-full border border-orange-600'>Learn More</button>
              </div>
    </div>
  )
}

export default ServiceItem