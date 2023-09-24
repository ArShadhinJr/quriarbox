import CompHead from '../CompHead/CompHead'
import { AiTwotoneStar } from 'react-icons/ai'
import Client from '../../assets/client.png'

const Clients = () => {
  return (
      <div className='container pt-[170px] after after:bg-quote after:bg-no-repeat after:bg-opacity-0 after:top-[130px] after:left-[300px] overflow-hidden' >
          <CompHead title='TESTIMONIAL' desc='Our Awesome Clients' />
          <div className='w-8/12 mx-auto bg-white rounded-2xl py-[40px] px-[18px]'>
              <h3 className='text-primary text-[25px] font-bold'>Fantastic service!</h3>
              <p className=' text-gray-800 text-justify leading-[145%] py-[11px]'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
              <div className='flex justify-between items-center'>
              <div className='flex gap-x-1 text-primary'>
                  <AiTwotoneStar className='w-[22px] h-[20px]'/>
                  <AiTwotoneStar className='w-[22px] h-[20px]'/>
                  <AiTwotoneStar className='w-[22px] h-[20px]'/>
                  <AiTwotoneStar className='w-[22px] h-[20px]'/>
                  <AiTwotoneStar className='w-[22px] h-[20px]'/>
              </div>
                  <div className='flex items-center'>
                      <div className='flex flex-col items-end mr-4'>
                          <h3 className='font-black'>Yves Tanguy</h3>
                          <p className='text-gray-800'>Chief Executive, DLF</p>
                      </div>
                      <div>
                          <img src={Client} className="rounded-full" />
                      </div>
              </div>
          </div>
          </div>
          
    </div>
  )
}

export default Clients