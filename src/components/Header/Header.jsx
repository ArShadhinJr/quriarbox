import logo from '../../assets/Logo.png'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
      <div className='bg-[#FFFFFFB2] pt-[15px] pb-[29px]'>
          <div className='container flex items-center'>
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
          </div>
    </div>
  )
}

export default Header