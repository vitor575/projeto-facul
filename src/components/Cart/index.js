import CartItem from "../CartItem";
import "./Cart.css"

const Cart = () => {
    return (
        <section className="cart">
            <div className="cart-items">
                <CartItem img="" titulo="comida" preco="1000.00"/>
            </div>
            <div>
                valor do carrinho
            </div>
        </section>
    )
};

export default Cart;