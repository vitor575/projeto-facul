import Card from "../../components/Cards";
import Navegacao from "../../components/Navegacao";
import "./Cardapio.css";
import pratos from "../../cardapio.json";

const Cardapio = () => {

    return (    
            <main>
                <nav className="nav-bar">
                    <ul>
                        <Navegacao to="/cardapio">La carte</Navegacao>
                        <Navegacao to="/lanches">Lanches</Navegacao>
                        <Navegacao to="/pasta">Pasta</Navegacao>
                        <Navegacao to="/bebidas">Bebidas</Navegacao>
                        <Navegacao to="/sobremesas">Sobremesas</Navegacao>
                    </ul>
                </nav>
                <section className="menu">
                        {pratos.map((prato) => <Card preco={prato.preco.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                        } img={prato.imagem}>{prato.nome}</Card>)}
                </section>
            </main >
    )
}


export default Cardapio;