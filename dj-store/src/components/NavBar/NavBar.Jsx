import PioneerLogo from "./assets/Pioneer-DJ_logo.png"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = ( ) => {
    return (
        <nav>
            <a href="../../../public/index.html"> <h1> {PioneerLogo} </h1> </a>
            <div>
                <button>Consolas</button>
                <button>Parlantes</button>
                <button>Auriculares</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar
