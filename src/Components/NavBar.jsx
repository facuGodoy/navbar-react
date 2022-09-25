import * as React from "react";
// import Logo from "../";
// import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
// import ItemListContainer from "./ItemListContainer";
// import Tooltip from "@mui/material/Tooltip";
// import { Avatar } from "@mui/material";

const pages = ["Bebidas", "Tortas", "Mas vendidos"];
const links = [
  {
  id:'1b', name:'Bebidas', path:'/category/bebidas'
  },
  {
  id:'2b', name:'Tortas', path:'/category/tortas'
  },
  {
  id:'3b', name:'Batidos', path:'/category/batidos'
  },]

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                height: "4rem",
              }}
              component="img"
              alt="frambuesa"
              src="https://i.postimg.cc/ZYvYqjz9/logo-e-Comerce.png"
            />
          </NavLink>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "special elite",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              padding: "1rem",
            }}
          >
            E-Commerce
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path}>{page.name}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            // component={RouterLink}
            // to={`/`}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            tegopet
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              {links.map((page) => (
                <NavLink to={page.path} key={page.name}>
                  {page.name}
                </NavLink>
              ))}
            </Button>
          </Box>

          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
