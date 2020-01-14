import styled from 'styled-components';

const theme = {
    color:{
        redColor:'red',
        blueColor: 'blue',
        yellowColor: 'yellow',
        purpleColor: 'purple',
        tealColor: 'teal',
        palevioletredColor:'palevioletred', 
        lightblueColor: 'lightblue',
    },
}

const MainContainer = styled.div`
    background: ${props =>props.homepage ? theme.color.purpleColor : theme.color.lightblueColor};
    width: 100%; 
    height: 100%;
    position:relative;
    display : grid;
    margin: auto;
    grid-template: 250px 1500px 250px / repeat(12, 1fr);
    grid-template-areas:
        'h h h h h h h h h h h h'
        'c c c c c c c c c c c c'
        'f f f f f f f f f f f f';

        
`;
export default MainContainer;