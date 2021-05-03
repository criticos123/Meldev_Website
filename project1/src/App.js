import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
       <NavBar/>
      </Container>
    );
  }
}

const Container= styled.div`

    display:flex;
    align-items:center;
    height:100%;

`;

export default App;
