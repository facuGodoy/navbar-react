import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { styled } from "@mui/material/styles";
// import { IconButton } from "@mui/material";
// import { link as RouterLink } from "react-router-dom";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  return (
    // <IconButton aria-label="cart" component={RouterLink} to={ `/cart`}>
      <StyledBadge>
        <LocalMallIcon style={{ color: "#000", width: "3rem", height: "3rem" }} />
      </StyledBadge>
    // </IconButton>
  );
}
