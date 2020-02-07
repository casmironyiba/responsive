import React from 'react';
import styled from 'styled-components';
import NavSearch from './NavSearch';
import Logo from './Logo';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

 const theme = {
         darkColor:'#333333',
         blueColor:'blue',
         tealColor:'teal',
         whiteColor:'white',
         palevioletredColor: 'palevioletred',
         yellowColor: 'yellow'
 };


const Container = styled.div`

  *:focus {
    outline:none
  }

    width : 100%;
    height:60px;
    background : ${theme.whiteColor};
    display: flex;
    justify-content:flex-start;
    align-items:center;
    list-style:none;
    opacity:1;

    @media screen and (max-width:1600px) {
      margin:auto;
      width:100%;

      .hamburger {display:none};
    }
    @media screen and (max-width:1200px) {
      margin:auto;
      width:100%;
      .hamburger {display:none};
    }

    @media screen and (max-width:800px) {
      margin:auto;
      width:100%;
      height:80px;
      .navLinks {display:none};
    }
    

    @media screen and (max-width:600px) {
      margin:auto;
      width:100%;
      height:50px;
      background:green;
      .navLinks {display:none};
    };

    .hamburger:hover {
        .navLinks {
          display: flex;
          justify-content:column wrap;
          align-content:flex-start;
        };
      };
    };

`;


const NavBar = () => {
  return (
    <Container>
      <Hamburger />
      <Logo />
      <NavSearch />
      <NavLinks />
    </Container>
  )
}

export default NavBar;

