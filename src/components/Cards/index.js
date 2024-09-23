import "./Cards.css";

const Card = ({img, preco , textoAlt, children}) => {
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt={textoAlt}/> 
            </div>
            <div className="card-titulo">
                <h3>{children}</h3>
                <p>{preco}</p>
                <button className="btn">Pedir</button>
            </div>
        </div>
    )
};

export default Card;