import "./Cart-item.css"
import { MdDelete } from "react-icons/md";
import formatCurrency from "../../utils/formatCurrency";

const CartItem = (props) => {
    const {id, titulo, preco, img} = props;

    return (
        <div key={id} className="cart__item">
            <img src={img} alt="imagem do item" className="cart__item__img"/>
            <div className="cart__item__content">
                <h3 className="cart__item__title">{titulo}</h3>
                <h3 className="cart__item__price">{formatCurrency(preco)};
                </h3>

                <button type="button" className="button__delete"><MdDelete /></button>
            </div>
        </div>
    )
}

export default CartItem