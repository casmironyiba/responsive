import styled from 'styled-components';


const theme = {
    whiteColor : 'white',
    lightblueColor: 'lightblue',
    tealColor: 'teal',
    redColor: 'red',
    blackColor: 'black',
};


const ContentCard = styled.div`
    width:150px;
    height:70px;
    background:${theme.lightblueColor};
    border:1px solid ${theme.redColor}; 
    box-shadow: 2px 2px 2px ${theme.blackColor}; 


`;
export default ContentCard;