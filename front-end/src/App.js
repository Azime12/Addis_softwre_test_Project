import "./App.css";
import FileUploads from "./Components/FileUploads";
import Container  from "./Components/Container";
import { ThemeProvider } from "styled-components";
const theme = {

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container />
      </div>
    </ThemeProvider>
  );
}

export default App;
