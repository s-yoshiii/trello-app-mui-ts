import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import TaskCardsArea from "./components/task/TaskCardsArea";
import { theme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "grey.100" }}>
        <Header />
        <TaskCardsArea />
      </Box>
    </ThemeProvider>
  );
}

export default App;
