import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Nosotros from './components/pages/nosotros'
import Contact from './components/pages/contacto'
import Inicio from './components/pages/index'
import Portfolio from './components/pages/portfolio'
import Services from './components/pages/servicios'
import './css/App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='min-h-screen w-full flex items-center justify-center'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/servicios' element={<Services />} />
            <Route path='/contacto' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
   
    </>
  )
}

export default App
