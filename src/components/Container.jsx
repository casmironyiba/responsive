import styled from 'styled-components';


const Container = styled.div`
    background: ${props => props.contentContainer ? "url('images/image2_0.jpg')" : 'red'};
    background-position: ${props => props.contentContainer ? 'center' : ''};
    background-size: ${props => props.contentContainer ? 'cover' : ''};
    background-repeat:: ${props => props.content ? 'no-repeat' : ''};    
    width :${props => props.contentContainer ? '100%' : '100%'};
    height:100%;
    display: ${props => props.contentContainer ? 'flex' :''};
    justify-content: ${props => props.contentContainer ? 'flex-start' :""};
    align-items: ${props => props.contentContainer ? 'flex-start' : ''}
    opacity: 1;
    margin: ${props => props.sectionContainer ? ' auto' : ''};
`;
export default Container;
