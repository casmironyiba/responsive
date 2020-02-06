import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';
import Text from './Text';
import Animation from './Animation';
import Section from './Section';


const theme = {
        redColor: 'red',
        darkColor : "#333333",
        whiteColor : 'white',
        yellowColor: 'yellow',
        blackColor: "black",
};

 const TitleTag = styled.title`
    width: 100%;
    height: 170px;
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


     
const Title = () => {
     return (
       <Theme theme = {theme}>
         <Section title>
         <TitleTag title >
           <Animation title>
              <Section textContainer>
                <Text title>
                  NaijafOreZ Website
                </Text>
              </Section>
         </Animation>
         </TitleTag>
        </Section>
        </Theme>
     )
   }
 
 
 export default Title;