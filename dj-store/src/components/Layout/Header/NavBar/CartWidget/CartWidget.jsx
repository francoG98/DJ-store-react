import cart from './assets/cart.png'
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div>
            <img className='image' src={cart} alt="cart" />
            5
        </div>
    )
}

export default CartWidget