import React from 'react';
import styled from 'styled-components';

const theme = {
    tealColor:'teal'
};


const Container = styled.div`
    width: 15%;
    height:100%;
    `;
    
const Section = styled.div`
    width:100%;
    margin:auto;
    margin-top:20px
    font-size:2rem;
    color:${theme.tealColor};
`;

const Logo = () => (
    <Container>
        <Section>Logo</Section>
    </Container>
);

export default Logo;

