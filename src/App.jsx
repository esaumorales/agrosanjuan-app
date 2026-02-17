import Header from './components/Header'
import './App.css'
import Contactanos from './components/Contactanos'
import Footer from './components/Footer'
import Layout from './layout/Layout'
import Products from './components/Products'


import { Routes, Route } from 'react-router-dom';
import ProductsPage from './assets/page/ProducsPage';
import Nosotros from './components/Nosotros'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='grow'>
        <Routes>
          <Route path="/" element={
            <>
              <Layout />
              <Products />
              <Nosotros />
              <Contactanos />
            </>
          } />
          <Route path="/product/:slug" element={<ProductsPage />} />
        </Routes>
      </div>
      <div className='shrink-0'>
        <Footer />
      </div>
    </div>
  )
}

export default App
