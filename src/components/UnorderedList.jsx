import styled from 'styled-components';


export const UnorderedList = styled.ul`
    width:${props => props.NavLinks ? '50%' :'100%'};
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-flow: row wrap;
    list-style:none;
    background: transparent;
    margin-left: auto;

    a {
        text-decoration: none;
        color:black;
    };

    @media screen and (max-width:600px) {}
       
`;

