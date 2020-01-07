import styled,{ThemeProvider as Theme} from 'styled-components';


export const Container = styled.div`
    background: transparent;
    width : props => props.container ? 100% ;
    display : flex;
    justify-content : flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
`;