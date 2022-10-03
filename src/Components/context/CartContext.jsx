import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("cart"));
    localData && setCart(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, cantidad) => {
    let purchase = { ...item, quantity: cantidad };
    const existInCart = cart.find((prod) => prod.id === item.id);
    if (existInCart) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id && prod.quantity < prod.stock) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay stock suficiente!",
          });
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, purchase]);
    }
  };
  console.log(cart);

  const removeItem = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const itemInCart = cart.some((cartItem) => cartItem.id === id);
    if (itemInCart) {
      return true;
    } else {
      return false;
    }
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal }}>{children}</CartContext.Provider>
  );
};

//  FORMA MAS FACIL DE EXPORTAR EL CONTEXT CON UN CUSTOMEHOOK

// export const useCartContext = () => useContext(CartContext);
