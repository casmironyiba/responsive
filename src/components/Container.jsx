import styled,{ThemeProvider as Theme} from 'styled-components';


const Container = styled.div`
    background: black;
    width :${props => props.content ? '100%' : '50%'};
    height:100%;
    display : flex;
    justify-content : flex-start;
    align-items: center;
    flex-flow: row wrap;
`;
export default Container;
