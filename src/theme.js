import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1d2b3a",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#f2f2f2", 
      secondary: "#899cb2",
    },
    success: { 
      main: "#43c773",
    },
    error: {    
      main: "#e13737",
    },
    background: {
      default: "#1d2b3a",
    },
    marketCard: {          
      background: "#2F3F50",
      yes:{
        main:"#43c773",
        background:'#325455'
      } ,     
      no:{ 
        main:"#e13737",
        background:"#4b3f4c",
      },       
      text: "#f2f2f2",     
    },
  },
});
