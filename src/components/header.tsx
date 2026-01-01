import conexcanLogo from '../assets/svg/logo.svg'

conexcanLogo;

export default function Header(){

    return(
        <>
        <div className="menu-wrapper">

            <div className="logo-wrapper">
      <a href="https://vite.dev" target="_blank">
          <img src={conexcanLogo} className="logo" alt="Vite logo" />
        </a>
            </div>
            <div className="menu-nav">

            </div>

        </div>
        </>

    );
}