import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar/SideBar"
import { Store } from "./Components/ReduxToolKit/Store";
import { Provider } from "react-redux";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Provider store={Store}>
      <BrowserRouter>
    <SideBar/>
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
