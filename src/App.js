import "./App.css";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar.jsx";

function App() {
  const greeting = "Hola, Bienvenidos a la App de mi E-Commerc..!";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <hr />
      
    </>
  );
}

export default App;