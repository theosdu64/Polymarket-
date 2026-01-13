import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Logo'
import LoginSignUpBtn from "../LoginSignUpBtn/LoginSignUpBtn.jsx";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1.5, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    fontSize: '1rem', 
    [theme.breakpoints.up('sm')]: {
      width: '30ch', 
      '&:focus': {
        width: '50ch', 
      },
    },
  },
}));

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ py: 1 }}> 
          <Logo />

          <Search
            sx={{
              ml: 2,
              flexGrow: 1,
              maxWidth: 800, 
              height: 48, 
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: 24 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search markets..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <LoginSignUpBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
}