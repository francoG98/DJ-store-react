import CartWidget from "../CartWidget/CartWidget"

const Navbar = ( ) => {
    return (
        <nav>
            <a href="../../../public/index.html"> <h1> <img src="../../Pioneer-DJ_logo.png" alt="Pioneer-DJ_logo" /></h1> </a>
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