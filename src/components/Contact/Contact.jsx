import Sms from '../../assets/sms.png'
const Contact = () => {
  return (
      <div className='container pt-[170px]'>
          <div className='w-8/12 mx-auto'>
              <div className='w-6/12'>
                  <img className='inline-block' src={Sms} />
                  <h4 className='text-primary text-[24px] font-bold'>REQUEST A CALLBACK</h4>
                  <h3 className='text-black mb-[30px] pt-[20px] pb-[9px] text-[40px]'>We will contact in the shortest time.</h3>
                  <p className='text-gray-800 text-[25px] '>Monday to Friday, 9am-5pm.</p>
                </div>
                <div className='w-6/12'></div>
          </div>
    </div>
  )
}

export default Contact