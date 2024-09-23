import "./Cart-item.css"
import { MdDelete } from "react-icons/md";

const CartItem = ({img, preco, titulo}) => {
    return (
        <section className="cart__item">
            <img src={img} alt="imagem do item" className="cart__item__img"/>
            <div className="cart__item__content">
                <h3 className="cart__item__title">{titulo}</h3>
                <h3 className="cart__item__price">{preco.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                </h3>

                <button type="button" className="button__delete"><MdDelete /></button>
            </div>
        </section>
    )
}

export default CartItem