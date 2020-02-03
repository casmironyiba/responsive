import styled from 'styled-components';


const Container = styled.div`
    background: 
        ${props => props.contentContainer ? "url('images/image2_0.jpg')" 
        :props.navForm ? 'transparent' :'red'};
    background-position: ${props => props.contentContainer ? 'center' : ''};
    background-size: ${props => props.contentContainer ? 'cover' : ''};
    background-repeat: ${props => props.content ? 'no-repeat' : ''};    
    width :
        ${props => props.contentContainer ? '100%' 
        :props.navForm ? '70%'
        : '100%'};
    height:100%;
    display: 
        ${props => props.contentContainer ? 'flex' 
        :props.navForm ? 'flex' :''};
    justify-content: 
        ${props => props.contentContainer ? 'flex-start' 
        :props.navForm ? 'space-around' :""};
    align-items: 
        ${props => props.contentContainer ? 'center' 
        :props.navForm ? 'center': ''}
    margin: ${props => props.sectionContainer ? ' auto' : ''};
`;
export default Container;
