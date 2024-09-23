import "./Header.css";
import logo from "../../img/Dev_res.png"
import { useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    const local = useLocation();

    return (
        <header className="cabecalho">
            <div className={`${local.pathname === "/" ? "img-cabecalho" : "img-cabecalho-on"}`}>
                <img src={logo} alt="logo dev-res" />
            </div>
            <div>
                <h1 className="titulo">{`${local.pathname === "/" ? "Bem-vindo" : ""}`}</h1>
            </div>
            <div>
                <button className="cart__button">
                    <CiShoppingCart />
                    <span className="cart__status">1</span>
                </button>
            </div>
        </header>
    )
}

export default Header;