import React, { useContext } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Divider, Stack } from "@mui/material";
import { CartContext } from './context/CartContext';

export default function CartItem({compra}) {
  const {removeItem} = useContext(CartContext);
  return (
    <div className="" key={compra.id}>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 6 }}
        alignItems="center"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* key={compra.id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".5rem",
          width: "100%",
        }} */}

        <img src={compra.img} alt={compra.name} style={{ width: "5rem" }} />
        <span>{compra.name}</span>
        <span>{compra.quantity}</span>
        <span>{compra.price}</span>
        <Button color="error" variant="contained" size="small" startIcon={<DeleteIcon />} onClick={() => removeItem(compra.id)}>
          Eliminar
        </Button>
      </Stack>
    </div>
  );
}