import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Home";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function Nav() {
  const [openMenu, setopenMenu] = useState(false);
  const menuOptions = [
    {
        Text:"Home",
        icon:<HomeIcon/>
    },

    {
        Text:"About",
        icon:<InfoIcon/>
    },

    {
        Text:"Testimonials",
        icon:<CommentRoundedIcon/>
    },
    {
        Text:"Contact",
        icon:<PhoneRoundedIcon/>
    },
    {
        Text:"Cart",
        icon:<ShoppingCartRoundedIcon/>
    },
  ]


  return <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt="" />
    </div>
    <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon"/>
        </a>
        <button className="primary-button">Order Now</button>
    </div>
    <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setopenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={() => setopenMenu(false)}
    anchor="right">
    <Box sx={{
      width: 250
    }}
    role ="presentation"
    onClick={() => setopenMenu(false)}
    onKeyDown={() => setopenMenu(false)}
    >
      <List>
       {menuOptions.map((item) => (
        <ListItem key={item.Text} disablePadding >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary ={item.Text} />
          </ListItemButton>

        </ListItem>
       ))}
     
     </List>
      </Box>      
      
      </Drawer>
  </nav>
}
export default Nav
