import "./Header.css";
import logo from "../../img/Dev_res.png"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const local = useLocation();

    return(
        <header className="cabecalho">
            <div className={`${local.pathname === "/" ? "img-cabecalho" : "img-cabecalho-on"}`}>
                <img src={logo} alt="logo dev-res"/>
            </div>
            <div>
                <h1 className="titulo">{`${local.pathname === "/" ? "Bem-vindo" : ""}`}</h1>
            </div>
            <div className={`${local.pathname === "/" ? "conta-off" : "conta"}`}>
                <Link className="header-link" to="/fecharConta" >Fechar conta</Link>
            </div>
        </header>
    )
}

export default Header;