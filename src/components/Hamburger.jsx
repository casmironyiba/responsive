import React from 'react';
import styled from 'styled-components';
import UnorderedList from './UnorderedList';


const HamburgerTag = styled.div`
    width:50px;
    height:50px;
    //margin:1px;
    margin-left:auto;
    positon:relative;
    
    &:hover {
        width:200px;
        height:500px;
        background:white;
        position:relative; 
        top:225px;
        .hamburg {display:none};
    
        @media screen and (max-width:600px) {
            /* .navLinks {
                display: flex;
                justify-content:column wrap;
                align-content:flex-start;
              } */
        }

`;

const Hamburg = styled.div`
    width:100%;
    height:8px;
    background:lightblue;
    margin:5px;
   
`;

const Hamburger = () => (
    <HamburgerTag className ="hamburger">
        <Hamburg className = 'hamburg'/>
        <Hamburg className = 'hamburg'/>
        <Hamburg className = 'hamburg'/>
    </HamburgerTag>

);

export default Hamburger;