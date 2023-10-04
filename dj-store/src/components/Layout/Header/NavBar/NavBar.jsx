import './NavBar.css';
import PioneerLogo from "./assets/Pioneer-DJ_logo.png";
import CartWidget from './CartWidget/CartWidget';

const NavBar = ( ) => {
    return (
        <nav>
            <a href="../../../public/index.html"> <h1> <img className="Logo"src={PioneerLogo} alt="PioneerLogo" /> </h1> </a>
            <div className="Buttons">
                <button className='Button'>Consolas</button>
                <button className='Button'>Parlantes</button>
                <button className='Button'>Auriculares</button>
                <button className='Button'>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
