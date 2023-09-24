import CompHead from '../CompHead/CompHead'
import ServiceItem from '../ServiceItem/ServiceItem'
import BagSer from '../../assets/bagSer.svg'
import HouseSer from '../../assets/houseSer.svg'
import DocSer from '../../assets/docSer.svg'

const Services = () => {
  let serItems = [
    {
      img: BagSer,
      title: 'Business Services'
    }, 
    {
      img: HouseSer,
      title: 'Statewide Services'
    }, 
    {
      img: DocSer,
      title: 'Personal Services'
    }
  ]
  return (
      <div className='container pt-web'>
          <CompHead title='Services' desc='Our services for you'/>
          <div className='flex md:flex-row flex-col justify-between md:gap-x-6 gap-x-0 md:gap-y-0 gap-y-6'>
              {
              serItems.map((item, index) => {
                return <ServiceItem key={index} img={item.img} title={item.title} />
              })
              }
          </div>
    </div>
  )
}

export default Services