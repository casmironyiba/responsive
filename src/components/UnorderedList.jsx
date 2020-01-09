import styled from 'styled-components';


export const UnorderedList = styled.ul`
    width:${props => props.NavLinks ? '70%' :'100%'};
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-flow: row wrap;
    list-style:none;
    background: palevioletred;
    margin-left: auto;

    a {
        text-decoration: none;
        color:yellow;
    };

    @media screen and (max-width:600px) {
       
`;

