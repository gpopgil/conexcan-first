import conexcanLogo from '../assets/svg/logo.svg'





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
                   
                </div>

            </div>
        </>

    );
}