import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import NavBar from './NavBar';



const theme = {
        darkColor: '#333333',
        whiteColor: 'white',
    };

    

const Container = styled.div`
    grid-area: h;
    width:100%;
    height:100%;
    background: ${theme.darkColor};

    @media screen and (max-width:1600px) {
      height:250px;
    };

    @media screen and (max-width:1200px) {
      height:200px;
    };

    @media screen and (max-width:800px) {
      height:200px;
    };
    
    @media screen and (max-width:600px) {
      height:150px;
      };
    };

`;




const Header = () => {
  return (
    <Container className = 'header' >
        <Title />
        <NavBar />
    </Container>
  )
}

export default Header;
