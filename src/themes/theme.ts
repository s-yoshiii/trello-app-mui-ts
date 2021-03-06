import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#406882",
      light: "#66869b",
      dark: "#2c485b",
    },
    secondary: {
      main: "#F38BA0",
      light: "#aa6170",
      dark: "#f5a2b3",
    },
  },
  spacing: 5,
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
  },
});
