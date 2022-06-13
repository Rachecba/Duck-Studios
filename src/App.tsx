import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Main from './Main';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Styled.ContainerWrap>
          <Header/>
          <Main />
          <Footer/>
      </Styled.ContainerWrap>
    </Router>
  </ThemeProvider>
  );
}

export default App;
