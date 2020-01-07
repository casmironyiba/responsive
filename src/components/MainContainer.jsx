import styled,{ThemeProvider as Theme} from 'styled-components';

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
    width: ${props => props.homepage ? '1600px' : '1600px'}; 
    height: ${props => props.homepage ? '2000px' : '2000px'};
    position:relative;
    display : grid;
    grid-template: 250px 1500px 250px / repeat(12, 1fr);
    grid-template-areas:
        'h h h h h h h h h h h h '
        'm m m c c c c c c c c c '
        'f f f f f f f f f f f f '
    ;
`
export default MainContainer;