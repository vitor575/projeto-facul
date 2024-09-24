import { useContext } from "react";
import CartItem from "../CartItem";
import "./Cart.css"
import AppContext from "../../context/AppContext";

const Cart = () => {
    const { cartItems } = useContext(AppContext);

    return (
        <section className="cart">
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} img={item.img} titulo={item.children} preco={item.preco} />)}

                
            </div>
            <div>
                valor do carrinho
            </div>
        </section>
    )
};

export default Cart;