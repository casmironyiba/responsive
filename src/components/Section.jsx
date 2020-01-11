import styled from 'styled-components';


const Section = styled.div`
    background: ${props => props.title ? 'none'
        :props.content ? 'yellow' 
        :props.NavSection ? "teal"
        :props.menu ? 'green' 
        :"none" };

    width: ${props => props.NavSection ? '30%' 
        :props.title ? '100%' 
        :props.content ? '70%'
        :props.menu ? "30%"
        :'100px'
      };

    

    height: ${props => props.Title ? "80px" : '100%'};
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: row wrap;

`;


export default Section;