import "./CardapioTela.css";
import Navegacao from "../Navegacao";
import Card from "../Cards";
import formatCurrency from "../../utils/formatCurrency";


const CardapioTela = ({pratos}) => {

    return (
        <main>
        <nav className="nav-bar">
            <ul>
                <Navegacao to="/lacarte">La carte</Navegacao>
                <Navegacao to="/lanches">Lanches</Navegacao>
                <Navegacao to="/pasta">Pasta</Navegacao>
                <Navegacao to="/bebidas">Bebidas</Navegacao>
                <Navegacao to="/sobremesas">Sobremesas</Navegacao>
            </ul>
        </nav>
        <section className="menu">
                {pratos.map((prato) => <Card id={prato.id} preco={prato.preco} img={prato.imagem}>{prato.nome}</Card>)}
        </section>
    </main >
    )

}


export default CardapioTela;