import styled from 'styled-components';


const Section = styled.div`
    background: teal;
    width: ${props => props.NavSection ? '30%' : '100%'};
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: row wrap;

    @media screen and (max-width:600px) {
        display:none;
    }
`;


export default Section;