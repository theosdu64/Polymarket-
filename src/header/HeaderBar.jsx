import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Logo'
import LoginSignUpBtn from "../LoginSignUpBtn/LoginSignUpBtn";
import HowItWorksButton from "../components/HowItWorkButton/HowItWorkButton";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";

const Search = styled('div')(({ theme }) => ({
  position: 'relative', 
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  height: 40,
  flex: 1, 
  maxWidth: 600, 
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

export default function HeaderBar() {
  return (
    <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' ,py: 2 }}>
      <Logo />
      
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search polymarket"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <HowItWorksButton />
        <LoginSignUpBtn />
        <BurgerMenu />
      </Box>
    </Toolbar>
  );
}