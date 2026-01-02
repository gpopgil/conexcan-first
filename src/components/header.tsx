// Importing React and necessary modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing assets and styles
import conexcanLogo from '../assets/svg/logo.svg'
import '../css/header.css'

// Importing page components 
import Contacto from './pages/contacto'
import Index from './pages/index'
import Nosotros from './pages/nosotros'
import Portfolio from './pages/portfolio'
import Servicios from './pages/servicios'

// Defining the type for navigation links
interface navLinkType{ 
    name:string
    path: string
}
// Array of navigation links
const navLinks: navLinkType[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' }
]

export default function Header() {

    return (
        <>
            <BrowserRouter>
                <div className="menu-wrapper">
                    <Routes>
                        <div className="logo-wrapper">
                            <a href="#" target="_blank">
                                <img src={conexcanLogo} className="logo-conexcan" alt="Conexcan Logo" />
                            </a>
                        </div>
                        <div className="menu-nav">
                            <a href="#">Nuestra visión</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Servicios</a>
                            <a href="#">Contacto</a>
                        </div>
                    </Routes>
                </div>
            </BrowserRouter>
        </>

    );
}