import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import logo from '../../assets/Logo.png'

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
      <header className='bg-[#FFFFFFB2]'>
          {/* <div className='container flex items-center'>
              <div className='w-2/5'>
                  <img src={logo} />
            </div>
              <div className='w-3/5 flex items-center justify-between'>
                  <div>
                      <nav>
                          <ul className='flex gap-x-[25px]'>
                              <li><a className='text-primary' href="#">Home</a></li>
                              <li><a className='text-gray-600' href="#">Our Service</a></li>
                              <li><a className='text-gray-600' href="#">About us</a></li>
                              <li><a className='text-gray-600' href="#">Whats New?</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div className='flex items-center'>
                      <p className='text-primary p-[13px] rounded bg-[#FFEDC9]'><BsSearch /></p> <p><a href="#" className="text-primary bg-[#FFE4D9] px-[20px] py-[11px] ml-5 rounded">Contact</a></p>
                  </div>
            </div>
          </div> */}
          <div className='container '>
            <div className="cross  "></div>
            <div className={` ${!toggle ? "flex" : "flex-block"} justify-between items-center xl:py-[27px] md:py-[17px] py-[14px]`}>
                <div className="xl:w-1/5">
                    <img src={logo} className={` ${!toggle ? "block" : "hidden"}`}/>
                </div>
                <div className={`xl:w-4/5 ${!toggle ? "block" : "flex justify-between"}`} >
                      
                  <p className={`font-bold xl:text-4xl md:text-2xl text-xl xl:hidden block text-primary ${!toggle ? "order-1": "order-2"}`} onClick={() => setToggle( !toggle )}>{!toggle ? <FaBars /> : <RxCross2 />}</p>
                      <div className={`${!toggle ? "hidden" : "block "} xl:block min-w-[140px]`}>
                        <img src={logo} className={`${!toggle ? "hidden" : "block"}`}/>
                        <ul className= {`text-gray-500 py-2 font-semibold xl:flex  gap-x-[47px] items-center justify-end `} >
                            <li className='hover:text-primary py-2 '>
                                Home
                            </li>
                            <li className='hover:text-primary py-2'>
                                Our Service
                            </li>
                            <li className='hover:text-primary py-2'> 
                                About us
                            </li>
                            <li className='hover:text-primary py-2'>
                                Whats New?
                            </li>
                            <li className='flex items-center'>
                                <p className='text-primary p-[13px] rounded bg-[#FFEDC9]'><BsSearch /></p> <p><a href="#" className="text-primary bg-[#FFE4D9] px-[20px] py-[11px] ml-5 rounded">Contact</a></p>
                            </li>
                        </ul>
                </div>
            </div>
              
          </div>
          </div>
    </header>
  )
}

export default Header