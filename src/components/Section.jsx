import styled from 'styled-components';



const Section = styled.div`
    background: ${props => props.title ? 'none'
        :props.content ? "none"  
        :props.NavSection ? "teal"
        :props.menu ? 'green' 
        :"none" };
        
    background-image: ${props => props.content ? "url('/home/casmir/dev/responsive/src/images/image1.jpeg')" : ''}
    background-position: ${props => props.content ? 'center' : ''};
    background-size: ${props => props.content ? 'cover' : ''};
    background-repeat                                                       : ${props => props.content ? 'no-repeat' : ''};


    width: ${props => props.NavSection ? '30%' 
        :props.title ? '100%' 
        :props.content ? '100%'
        :props.menu ? "30%"
        :'100px'};

    display: ${props => props.content ? 'grid' :''}; 
    grid-template: ${props => props.content ? 'repeat(20,150px) / repeat(3, 1fr)' :''};

    height: ${props => props.Title ? "80px" : '100%'};

`;


export default Section;