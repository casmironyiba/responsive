import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import NavBar from './NavBar';


const theme = {
    color: {
        darkColor: '#333333',
    }
}

const HeaderTag = styled.div`
    width:100%;
    height:300px;
    background: ${theme.color.darkColor};

    @media screen and (max-width:600px) {
      height:150px;
      }

    }
`;




const Header = () => {
  return (
    <HeaderTag className = 'header' >
        <Title />
        <NavBar />
    </HeaderTag>
  )
}

export default Header;
