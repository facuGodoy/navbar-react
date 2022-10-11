import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/context/CartContext";
import Footer from "./Components/Footer";
import CheckOut from "./Components/helper/CheckOut";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar.jsx";


function App() {
  
  

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;