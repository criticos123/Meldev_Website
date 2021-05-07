import React, { Component } from 'react';
import styled from "styled-components";
import Home from './components/Home';
import About from './components/About';
import Rent from './components/Rent';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route,NavLink} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Container>
          <Homelink to="/">
          <Logo>Meldev</Logo>
          </Homelink>
            <Bar>
            <Aboutlink to="/About">About</Aboutlink>
            <Rentlink to="/Rent" >For Rent</Rentlink>
            <Contactlink to="/Contact">Contact Us</Contactlink>
            </Bar>
          </Container>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Rent">
            <Rent/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Router>
      </Wrapper>
    );
  }
}

export default App;

const Container= styled.div`

    display:flex;
    justify-content:end;
    width:100%;
    border-bottom:4px solid #2F4F4F; 
    background-color: #fff;
`;

const Wrapper= styled.body`

  background-color: #008B8B;
  margin:auto;

`;

const Homelink=styled(NavLink)`

    text-decoration:none;
`;

const Logo= styled.h1`

    Font-size:50px;
    color:#008B8B;
    margin-left:10px;
    text-decoration:noe;
  
`;

const Bar= styled.div`

    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:60%;

    
`;

 const Aboutlink=styled(NavLink)`
    
    color:#008B8B;
    Font-size:30px;
    margin-right:20px;
 `;

 const Rentlink=styled(NavLink)`
    
    color:#008B8B;
    Font-size:30px;
    margin-right:20px;
`;

const Contactlink=styled(NavLink)`
    
    color:#008B8B;
    Font-size:30px;
`;
