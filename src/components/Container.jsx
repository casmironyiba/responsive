import styled,{ThemeProvider as Theme} from 'styled-components';


const Container = styled.div`
    background: black;
    width :${props => props.contentContainer ? '100%' : '100%'};
    height:100%;
    display: ${props => props.contentContainer ? 'flex' :''};
    justify-content: ${props => props.contentContainer ? 'flex-start' :""};
    align-items: ${props => props.contentContainer ? 'flex-start' : ''}
`;
export default Container;
