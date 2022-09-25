import { useEffect, useState } from "react";

const formStorage = JSON.parse(localStorage.getItem('cart')) || '[]';

const StorageProvider = ({ children }) => { 
  const [carrito, setCarrito] = useState(formStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  
  }, [carrito]);
  
};

export default StorageProvider;