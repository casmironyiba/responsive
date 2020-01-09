import styled from 'styled-components';


const Section = styled.div`
    background: teal;
    width: ${props => props.NavSection ? '30%' : '100%'};
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: row wrap;

`;


export default Section;