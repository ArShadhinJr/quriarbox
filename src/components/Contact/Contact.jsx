import Sms from '../../assets/sms.png'
import { BiLogoTelegram } from 'react-icons/bi';

const Contact = () => {
  return (
      <div className='container pt-[170px]'>
          <div className='w-8/12 mx-auto flex items-center gap-x-6'>
              <div className='w-6/12'>
                  <img className='inline-block' src={Sms} />
                  <h4 className='text-primary text-[24px] font-bold'>REQUEST A CALLBACK</h4>
                  <h3 className='text-black mb-[30px] pt-[20px] pb-[9px] text-[40px]'>We will contact in the shortest time.</h3>
                  <p className='text-gray-800 text-[25px] '>Monday to Friday, 9am-5pm.</p>
                </div>
                <div className='w-6/12'>
                  <form>
                    <input className='w-full px-[20px] py-[15px] bg-transparent rounded-lg border border-gray-400' type="text" placeholder='Name' />
                    <input className='w-full px-[20px] py-[15px] bg-transparent rounded-lg border border-gray-400 my-[16px]' type="email" placeholder='Email' />
                    <textarea className='w-full px-[20px] py-[15px] bg-transparent rounded-lg border border-gray-400 mb-[40px]' name="message" rows="5" placeholder='Message'></textarea>
                    <button className='btn btn-orange w-full'>Send Message <i className='inline-block ml-2'><BiLogoTelegram /></i></button>
                  </form>
                </div>
          </div>
    </div>
  )
}

export default Contact