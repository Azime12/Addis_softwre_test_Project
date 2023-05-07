import "./App.css";
import FileUploads from "./Components/FileUploads";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import Routers from "./Components/Routers";
import { BrowserRouter } from "react-router-dom";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App"> */}
      
        <Routers />
      
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
