import React from "react";
import useForm from "../hook/useForm";
import { styled } from "@mui/system";
import { InputUnstyled, TextareaAutosize } from "@mui/base";
import { Alert, Button, FormControl, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.js";
import Swal from "sweetalert2";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  comments: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /[+]*[(]?[0-9]{1,4}[)]?[0-9-\s]+$/;
  let regexComments = /^.{1,250}$/;

  if (!form.name.trim()) {
    errors.name = "Name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name is invalid: solo se aceptan letras y espacios";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Email is invalid: ingresar un email valido o sin espacios";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "Phone is invalid: solo se aceptan numeros";
  }

  if (!form.comments.trim()) {
    errors.comments = "Comments is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "Comments is invalid: El Comentario no debe exeder los 250 caracteres";
  }

  return errors;
};

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
`
);

// const CustomInput = React.forwardRef(function CustomInput(
//   props: React.InputHTMLAttributes<HTMLInputElement>,
//   ref: React.ForwardedRef<HTMLDivElement>
// ) {
//   return <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />;
// });

export default function CheckOut() {
  const { orderId, form, errors, loading, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validateForm);

  const navigateHome = useNavigate();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {!orderId ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
          <h2>Formulario de compra</h2>
          <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
            <FormControl>
              <InputUnstyled
                className="input"
                components={{ Input: StyledInputElement }}
                type="text"
                name="name"
                value={form.name}
                placeholder="Escribe tu nombre y apellido"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              {errors.name && (
                <Alert severity="error">
                  <p>{errors.name}</p>
                </Alert>
              )}

              <InputUnstyled
                className="input"
                components={{ Input: StyledInputElement }}
                type="email"
                name="email"
                value={form.email}
                placeholder="Escribe tu @email"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              {errors.email && (
                <Alert severity="error">
                  <p>{errors.email}</p>
                </Alert>
              )}

              <InputUnstyled
                className="input"
                components={{ Input: StyledInputElement }}
                type="number"
                name="phone"
                value={form.phone}
                placeholder="Escribe tu N° de teléfono"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

              {errors.phone && (
                <Alert severity="error">
                  <p>{errors.phone}</p>
                </Alert>
              )}

              <TextareaAutosize
                className="input"
                components={{ Input: StyledInputElement }}
                style={{ resize: "none", fontFamily: "inherit" }}
                name="comments"
                cols="50"
                rows="5"
                placeholder="Escribe un comentario"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.comments}
                required
              ></TextareaAutosize>

              {errors.comments && (
                <Alert severity="error">
                  <p>{errors.comments}</p>
                </Alert>
              )}

              <Button type="submit" value="Enviar" color="success" variant="contained">
                <Typography>Enviar Pedido</Typography>
              </Button>
            </FormControl>
          </form>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
            <Typography variant="h3">Muchas gracias por tu compra</Typography>
            <Typography variant="h6">Su orden es: {orderId}</Typography>
            <Typography>Te contactaremos a la brevedad</Typography>
            <Button onClick={() => navigateHome("/")} variant="contained" color="secondary">
              <Typography>Volver</Typography>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

