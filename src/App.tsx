import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Main from './Main';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
 
function App() {

  const TRACKING_ID = "G-6LW76DLFVS"; 
  ReactGA.initialize(TRACKING_ID);
    
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
