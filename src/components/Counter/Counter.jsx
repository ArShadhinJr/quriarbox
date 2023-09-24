import Cup from '../../assets/cup.svg'
import Map from '../../assets/map.svg'
import Man from '../../assets/man.svg'
import Track from '../../assets/track.svg'
import Bag from '../../assets/bag.svg'
import CounterItem from '../CounterItem/CounterItem'
const Counter = () => {

  let items = [
    {
      title: '26+',
      desc: 'Awards won',
      svg: Cup
    }, 
    {
      title: '65+',
      desc: 'States covered',
      svg: Map
    }, 
    {
      title: '688K+',
      desc: 'Happy clients',
      svg: Man
    }, 
    {
      title: '130M+',
      desc: 'Goods delivered',
      svg: Track
    }, 
    {
      title: '230M+',
      desc: 'Business hours',
      svg: Bag
    }
  ]

  return (
    <div className="container pt-[170px] flex justify-between">
      {
        items.map((item, index) => <CounterItem key={index} title={item.title} desc={item.desc} svg={item.svg} />)
      }
    </div>
  )
}

export default Counter