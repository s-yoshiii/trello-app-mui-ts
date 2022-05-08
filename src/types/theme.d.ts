declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
    };
    spacing: number;
    components: {
      MuiCardContent: {
        styleOverrides: {
          root: {
            ":last-child": {
              paddingBottom: string;
            };
          };
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
