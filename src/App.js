import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const saludo = "Hola, Bienvenidos a la App de mi E-Commerce..!";

  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/detalle/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer saludo={saludo} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
