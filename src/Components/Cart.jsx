import React, { useContext } from 'react';
import { CartContext } from "./context/CartContext";

export default function Cart() {
  
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div>
      <div className='outlined'>
        <h2>Proximamente Carrito..!</h2>
      </div>
    </div>
  )
}