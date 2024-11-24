import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  max_width:{selected:1200},
    palette: {
      primary: {
        main: '#009863',
        dark:'#f50057',
        light:"#00986380",
        thin:"#C4E3D7"
      },
      secondary: {
        main: '#EF9700',
        light:"#ef9700d4"
      },
      background: {
        grey:'#F1F1F1',
      },
      otherColors:{
        text:"#000000",
        white:"#ffffff"
      }
    
      // Add more custom colors if needed
    },
    // Add more custom theme configurations if needed
  });