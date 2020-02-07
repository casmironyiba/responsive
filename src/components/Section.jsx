import styled from 'styled-components';


const Section = styled.div`
    display:${props => props.navSection ?'flex': ''};
    justify-content: ${props => props.navSection ? "flex-start" : ''};
    align-items: ${props => props.navSection ? "center" : ''};
        :"none" };
    width:
        ${props => props.navSection ? '50%' 
        :props.content ? '100%'
        :props.menu ? "30%"
        :props.sectionContainer ? '100%%'
        :'100px'};
    margin: ${props => props.sectionContainer ? "0px auto" : 'right'};
    border: 
        ${props => props.containerTitle ?'1px solid red' 
        :props.sectionContainer ? '1px solid red'
        :""};
    display: ${props => props.content ? 'grid' :''}; 
    grid-template: ${props => props.content ? 'repeat(20,150px) / repeat(3, 1fr)' :''};
    height: 
        ${props => props.navSection ? '100%'
        :props.sectionContainer ? '1450px'
        :''};
   
    position: ${props => props.sectionContainer ? 'relative' :""};
    top: ${props => props.sectionContainer ? '50px' :""}
    box-sizzing: boder-box;
`;


export default Section;