import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Main from './Main';
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import ReactGA from 'react-ga4';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {

  const TRACKING_ID = "G-6LW76DLFVS"; 
  ReactGA.initialize(TRACKING_ID);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const refScrollUp = useRef<HTMLDivElement>(null);

  const handleScrollUp = () => {
    if(refScrollUp.current){
     refScrollUp.current.scrollIntoView({ behavior: "smooth"});
    }
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition >= 200) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 200) {
      return setshowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <ThemeProvider theme={theme}>
    <div ref={refScrollUp}> </div>
    <Router>
        <Styled.ContainerWrap>
          <Header/>
          <Main />
          <Footer/>
          {showGoTop === "goTop"&&
          <div onClick={handleScrollUp} className="btn-go-top ripple">
            <div className='arrow'>
            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </div>
          </div>
    }
      </Styled.ContainerWrap>
    </Router>

  </ThemeProvider>
  );
}

export default App;
