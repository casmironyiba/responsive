import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const theme = {
    tealColor:'teal'
};


const Container =styled.div`
    width:30%;
  
    @media screen and (max-width:600px) {
        Input {display:none};
        
    }
`;
const Input = styled.input `
    width:350px;
    height:40px;
    background:#ccc;
    border:0px solid ;
    border-radius:50px;
    text-align:center
    font-size: 1.2rem;
`;
 

 const NavSearch = () => {
     let styles={
         color:theme.tealColor,

     } 
    return (
     <Container>
        <Input placeholder='Search'/>
        <FontAwesomeIcon icon='search' style={styles} transform='left-70 grow-2' />
    </Container>   
    );
}
 export default NavSearch;