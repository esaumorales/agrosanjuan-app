import Header from './components/Header'
import './App.css'
import Contactanos from './components/Contactanos'
import Footer from './components/Footer'
import Layout from './layout/Layout'


function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='grow'>
        <Layout />
        <Contactanos />
      </div>
      <div className='shrink-0'>
        <Footer />
      </div>
    </div>
  )
}

export default App
