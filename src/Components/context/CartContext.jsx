import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    // FORMA 1 - ESTA SERIA LA OTRA FORMA DE HACERLO CON UNA FUNCION QUE RECIBE EL ITEM Y LA CANTIDAD(de esta forma lo explico laura en el after es por eso que te pregunto cual de las dos formas es la correcta)

    let purchase = { ...item, quantity: cantidad };
    const existInCart = cart.find((prod) => prod.id === item.id);
    if (existInCart) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, purchase]);
    }
  };

  // FORMA 2 - TE DEJO ESTAS DOS FORMAS DE HACER EL addItem, VOS ME DIRAS CUAL DE LAS DOS ES LA CORRECTA

  // const addItem2 = (item) => {
  // const existInCart = cart.find((prod) => prod.id === item.id)
  // if (existInCart) {
  //   const carritoActualizado = cart.map((prod) => {
  //     if (prod.id === item.id) {
  //       return { ...prod, quantity: prod.quantity + item.quantity }
  // }else{
  //   return prod
  // }
  // })
  // setCart(carritoActualizado)
  // } else {
  //   setCart([...cart, item])
  // }
  // };

  const removeItem = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
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
    return cart.reduce((acc, prod) => acc += prod.quantity, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc + (prod.quantity * prod.price)), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal }}>{children}</CartContext.Provider>
  );
};

//  FORMA MAS FACIL DE EXPORTAR EL CONTEXT CON UN CUSTOMHOOK

// export const useCartContext = () => useContext(CartContext);
