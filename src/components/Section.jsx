import styled from 'styled-components';


const Section = styled.div`
    background: ${props => props.title ? "none" : 'teal'};
    width: ${props => props.NavSection ? '30%' : props.Title ? '100%' : ''};
    height: ${props => props.Title ? "80px" : '100%'};
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: row wrap;

`;


export default Section;