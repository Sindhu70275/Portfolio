import Portfolio from "./components/Portfolio/Portfolio";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
