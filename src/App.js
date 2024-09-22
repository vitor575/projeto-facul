import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Menu from "./views/Menu";


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cardapio" element={<Menu/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
