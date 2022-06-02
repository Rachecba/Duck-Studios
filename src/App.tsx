import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Main from './Main';
import Header from './components/global/header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Styled.ContainerWrap>
            <Header/>
            <Main />
      </Styled.ContainerWrap>
    </Router>
  </ThemeProvider>
  );
}

export default App;
