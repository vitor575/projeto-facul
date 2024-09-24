import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Menu from "./views/Menu";
import Cart from "./components/Cart";
import Provider from "./context/Provider";
import LaCarte from "./views/LaCarte";
import Lanches from "./views/Lanches";
import Pastas from "./views/Pastas";
import Bebidas from "./views/Bebidas";
import Sobremesas from "./views/Sobremesas";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/lacarte" element={<LaCarte />} />
          <Route path="/lanches" element={<Lanches />} />
          <Route path="/pasta" element={<Pastas />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/sobremesas" element={<Sobremesas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
