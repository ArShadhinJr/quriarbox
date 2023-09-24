import Banner from './components/Banner/Banner'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import ContactMap from './components/ContactMap/ContactMap'
import Counter from './components/Counter/Counter'
import Delivery from './components/Delivery/Delivery'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Subscribe from './components/Subscribe/Subscribe'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Counter />
      <Delivery />
      <Clients />
      <Contact />
      <ContactMap />
      <Subscribe />
      <Footer/>
    </div>
  )
}

export default App