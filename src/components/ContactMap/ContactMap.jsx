import CompHead from "../CompHead/CompHead"
import Map from '../../assets/map.jpg'
import { FiMapPin } from 'react-icons/fi'
import { LuClock3 } from 'react-icons/lu'
import {RxEnvelopeClosed} from 'react-icons/rx'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { BsTelephone } from 'react-icons/bs'



const ContactMap = () => {
  return (
    <div className="container py-[170px]">
          <CompHead title='FIND US' desc='Access us easily' />
          <div className="flex gap-x-5">
              
              <div className="w-7/12">
              <img src={Map} className="w-full h-full rounded-xl"/>
            </div>
            <div className="w-5/12 p-[88px] rounded-xl bg-[#FEFCFA]">
                  <h2 className="font-black text-[20px] mb-[37px]">Contact with us</h2>
                  <p className="mb-[18px]"><FiMapPin className="text-primary inline mr-3"/> 2277 Lorem Ave, San Diego, CA 22553</p>
                  <p className="mb-[18px]"><LuClock3 className="text-primary inline mr-3"/>Monday - Friday: 10 am - 10pm
                      Sunday: 11 am - 9pm</p>
                  <p className="mb-[68px]"><RxEnvelopeClosed className="text-primary inline mr-3" />info@quriarbox.com</p>
                  
                  <p>
                      <FaFacebookSquare className="text-gray-500 hover:text-primary cursor-pointer inline mr-3 text-2xl" />
                      <FaTwitterSquare className="text-gray-500 hover:text-primary cursor-pointer inline mr-3 text-2xl" />
                      <FaInstagramSquare className="text-gray-500 hover:text-primary cursor-pointer inline mr-3 text-2xl" />
                  </p>
            </div>
          </div>
          <div className="pt-[30px] text-center">
              <button className="btn btn-orange"><BsTelephone className="inline text-2xl mr-3"/>Call us to delivery  123-456789</button>
          </div>
    </div>
  )
}

export default ContactMap