import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';
import Text from './Text';

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
    height: 200px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-item:center;

    @media screen and (max-width:800px) {
      height:150px;
    };

    @media screen and (max-width:600px) {
      height:100px;
    };
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
         <Text title>
           {this.state.TitleMessge}
         </Text>
         </TitleTag>
        </Theme>
     )
   }
 }
 
 export default Title;