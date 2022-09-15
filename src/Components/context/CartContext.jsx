import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // FORMA 1 - ESTA SERIA LA OTRA FORMA DE HACERLO CON UNA FUNCION QUE RECIBE EL ITEM Y LA CANTIDAD(de esta forma lo explico laura en el after es por eso que te pregunto cual de las dos formas es la correcta)

    const existInCart = cart.find((prod) => prod.id === item.id);
    if (existInCart) {
      setCart(cart.map((prod) =>
        (prod.id === item.id ? { ...prod, quantity: prod.quantity + item.quantity } : prod)));
    } else {
      setCart([...cart, item]);
    }

    // FORMA 2 - TE DEJO ESTAS DOS FORMAS DE HACER EL addItem, VOS ME DIRAS CUAL DE LAS DOS ES LA CORRECTA

    // if (isInCart(item.id)) {
    //   const newCart = cart.map((cartItem) => {
    //     if (cartItem.item.id === item.id) {
    //       return { item, quantity: cartItem.quantity + quantity };
    //     } else {
    //       return cartItem;
    //     }
    //   });
    //   setCart(newCart);
    // } else {
    //   setCart([...cart, { item, quantity }]);
    // }
  };

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

  return <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>{children}</CartContext.Provider>;
};

//  FORMA MAS FACIL DE EXPORTAR EL CONTEXT CON UN CUSTOMHOOK

// export const useCartContext = () => useContext(CartContext);
