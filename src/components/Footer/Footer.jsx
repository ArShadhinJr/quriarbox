import Logo from '../../assets/Logo.png'
import Links from '../Links/Links'

const Footer = () => {
  return (
      <footer>
          <div className='bg-gray-900'>
              <div className='container md:flex py-[50px]'>
                  <div className='md:w-6/12 md:text-start text-center '>
                      <img src={Logo} className='inline-block '/>
                      <p className='text-gray-400 text-base leading-[22px] pt-4' >The most trusted Courier <br />
company in your area.</p>
                  </div>
                  <div className='flex md:flex-row flex-col md:gap-0 gap-y-6 md:w-6/12'>
                      <Links head='Other Links' li1='Blogs' li2='Movers website' li3='Traffic Update' />
                      <Links head='Services' li1='Corporate goods' li2='Artworks' li3='Documents' />
                      <Links head='Customer Care' li1='About Us' li2='Contact US' li3='Get Update' />
                  </div>
              </div>
          </div>
          <div className='bg-[#222132]'>
              <div className='container py-[30px] flex md:flex-row flex-col md:gap-0 gap-y-2 justify-between text-center md:text-start'>
                  <p className='text-gray-400 text-base leading-[22px]' >All rights Reserved © Your Company, 2023</p>
                  <p className='text-gray-400'>Made with heart by <a target="_blank" rel="noreferrer" href="https://web.facebook.com/abdrahmanbinmd" className="text-primary ">Abdur Rahman</a></p>
              </div>
          </div>
    </footer>
  )
}

export default Footer