import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useState } from "react";
import NavbarDrawer from "./NavbarDrawer";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title: "Todos los productos",
      path: "/",
      icon: <MusicNoteIcon />,
    },
    {
      title: "Eléctricas",
      path: "/category/electric",
      icon: <MusicNoteIcon />,
    },
    {
      title: "Acústicas",
      path: "/category/acoustic",
      icon: <MusicNoteIcon />,
    },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between" },
            display: { xs: "flex" },
          }}
        >
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ color: "white" }}>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              <ElectricBoltIcon />
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Link to={item.path}>
                <Button className="link" key={item.title}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavbarDrawer navLinks={navLinks} />
      </Drawer>

      <Outlet />
    </div>
  );
};

export default Navbar;
