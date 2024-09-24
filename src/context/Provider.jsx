import { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  // Inicializando o estado com um array vazio
  const [cartItems, setCartItems] = useState([]);
  
  // Criando o valor a ser fornecido pelo contexto
  const value = {
    cartItems,
    setCartItems
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;