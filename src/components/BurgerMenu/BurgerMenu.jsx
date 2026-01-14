import './BurgerMenu.css'

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

export default function BurgerMenu() {
   return (
        <>

                    <IconButton
                        edge="start"
                        id="burger-menu"
                        color="inherit"
                        aria-label="open navigation menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>





        </>
    );
}