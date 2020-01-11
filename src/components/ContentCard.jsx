import styled from 'styled-components';


const theme = {
    whiteColor : 'white',
    lightblueColor: 'lightblue',
    tealColor: 'teal',
    redColor: 'red',
    blackColor: 'black',
};


const ContentCard = styled.div`
    width:350px;
    height:100px;
    background:${theme.lightblueColor};
    border:1px solid ${theme.redColor}; 
    box-shadow: 2px 2px 2px ${theme.blackColor}; 

`;
export default ContentCard;