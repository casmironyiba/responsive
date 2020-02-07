import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';
import Animation from './Animation';
import TitleText from './TitleText';

const theme = {
        redColor: 'red',
        darkColor : "#333333",
        whiteColor : 'white',
        yellowColor: 'yellow',
        blackColor: "black",
};

 const TitleTag = styled.title`
    width: 100%;
    height: 150px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-item:center;
    opacity:1

    
//////////////////////// media Query starts/////////////////////
    @media screen and (max-width:800px) {
      height:150px;
    };

    @media screen and (max-width:600px) {
      height:100px;
    };
//////////////////////// media Query ends/////////////////////
 `;

 const Container = styled.div`
    width:100%;
 `;

 const Section = styled.div`
    width:100%;
 `;

     
const Title = () => {
     return (
       <Theme theme = {theme}>
         <Container>
         <TitleTag>
           <Animation title>
              <Section>
                <TitleText/>
              </Section>
         </Animation>
         </TitleTag>
        </Container>
        </Theme>
     )
   }
 
 
 export default Title;