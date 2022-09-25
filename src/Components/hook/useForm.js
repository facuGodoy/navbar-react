import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../helper/FireBase";


export default function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErros] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [orderId, setOrderId] = useState('');
  const { cart, cartTotal, clear } = useContext(CartContext);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErros(validateForm(form));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const dataStore = collection(db, "Orders");
    addDoc(dataStore, {
      form,
      items: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    }).then((res) => {
      setOrderId(res.id);
      setResponse(true);
      clear();
    }).catch((err) => { 
      setResponse(false);

    }).finally(() => {
      setLoading(false);
    });
  };


  return {
    orderId,
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
