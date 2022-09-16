import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/context/CartContext";

function App() {
  const saludo = "Hola, Bienvenidos a la App de mi E-Commerce..!";

  return (
    <CartProvider>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer saludo={saludo} />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;