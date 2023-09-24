import BannerImg from '../../assets/banner.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Banner = () => {
  return (
      <div className='container pt-web lg:flex items-center'>
          <div className='lg:w-4/12 '>
              <h1 className='text-sec text-[49px] font-[400]'>A trusted provider of</h1>
              <h1 className='text-sec text-[49px] font-[900]'>courier services.</h1>
              <p className='text-gray-500 text-[20px] mb-[53px]'>We deliver your products safely to <br /> your home in a reasonable time.</p>
              <button className='btn btn-orange'>Get Started <i className='inline-block ml-3 font-black '><AiOutlineArrowRight /></i></button>
          </div>
          <div className='lg:w-8/12 '>
              <img src={BannerImg} className='w-full inline-block mx-auto'/>
          </div>

    </div>
  )
}

export default Banner