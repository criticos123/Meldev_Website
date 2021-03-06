import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import styled from "styled-components";

import theme from "../styles/theme";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import CssBaseline from "@material-ui/core/CssBaseline";

function Meldev({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title />
        <Navbar />
        <CssBaseline />
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  linear-gradient(lightblue, transparent),
  linear-gradient(to top , #6495ED, transparent);
  background-blend-mode: screen;
  margin:auto;
  flex-wrap: wrap;
`;

export default Meldev;
