import Player from '../../assets/player.png'
const Delivery = () => {
  return (
    <div className='container pt-web'>
          <div className='bg-delivery bg-cover bg-center bg-no-repeat rounded-2xl pt-[126px] pb-web grid place-content-center z-10 after  after:bg-opacity-70 after:rounded-2xl'>
              
              <div className='text-center'>
                  <img className='inline-block' src={Player} />
                  <h3 className='text-primary text-[32px] pt-[19px] pb-[28px] font-bold'>FASTEST DELIVERY</h3>
                  <p className=' max-w-[673px] text-white text-[25px] leading-[120%]'> You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 is our first priority.</p>
            </div>

        </div>
    </div>
  )
}

export default Delivery