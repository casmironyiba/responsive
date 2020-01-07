import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components'
import {Container} from './Container';
import Title from './Title';
import Nav from './Nav'; 


const theme = {
    color: {
        darkColor: '#333333',
        whiteColor:'whaite',
        blackColor: 'black',
    }
}

const MenuTag = styled.header`
    width:100%;
    height:100%;
    background : ${this.theme.color.darkColor};
    display: flex;
    justify-content:center;
    align-items: flex-start;
`;


class Menu extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
      return (
        <Container>
            
            
        </Container>
      )
    }
};    
    

export default Menu;
