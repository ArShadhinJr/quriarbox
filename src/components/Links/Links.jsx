import React from 'react'

const Links = (props) => {
  return (
    <div className='w-4/12'>
          <ul className=''>  
              <li className='text-white text-[20px] mb-[22px]'><a href="#">{props.head}</a></li>
              <li className='text-gray-400 text-base mb-[7px]'><a href="#">{props.li1}</a></li>
              <li className='text-gray-400 text-base mb-[7px]'><a href="#">{props.li2}</a></li>
              <li className='text-gray-400 text-base'><a href="#">{props.li3}</a></li>
        </ul>
    </div>
  )
}

export default Links