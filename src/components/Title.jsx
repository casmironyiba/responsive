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
    background : ${theme.darkColor};
    width: 100%;
    height: 170px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-item:center;

    



//////////////////////// media Query starts/////////////////////
    @media screen and (max-width:800px) {
      height:150px;
    };

    @media screen and (max-width:600px) {
      height:100px;
    };
//////////////////////// media Query ends/////////////////////
 `;

 
 class Title extends React.Component {
     constructor(props) {
       super(props)
     
       this.state = {
          TitleMessge : 'NaijafOreZ Website',
       };
     }
     
   render() {
     return (
       <Theme theme = {theme}>
         
         <TitleTag className >
           <Animation title>
              <Section title>
                <Text title>
                  {this.state.TitleMessge}
                </Text>
              </Section>
         </Animation>
         </TitleTag>
        </Theme>
     )
   }
 }
 
 export default Title;