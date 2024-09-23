import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Menu from "./views/Menu";
import Cardapio from "./views/Cardapio";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Cart />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cardapio" element={<Cardapio/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
