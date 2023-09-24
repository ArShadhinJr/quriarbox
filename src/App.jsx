import Banner from './components/Banner/Banner'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Counter from './components/Counter/Counter'
import Delivery from './components/Delivery/Delivery'
import Header from './components/Header/Header'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Counter />
      <Delivery />
      <Clients />
      <Contact/>
    </div>
  )
}

export default App