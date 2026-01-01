import conexcanLogo from '../assets/svg/logo.svg'
import '../css/header.css'

export default function Header() {

    return (
        <>
            <div className="menu-wrapper">
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

            </div>
        </>

    );
}