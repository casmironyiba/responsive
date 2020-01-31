import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';
//import Image from './Image';


const theme = {
        palevioletredColor : 'palevioletred',
        greenColor: 'green',
        whiteColor: 'white',
    }


const ContentTag = styled.div`
    grid-area:c;
    width:100%;
    height:100%;

`;

const Content = () => (
        <ContentTag>
            <Container contentContainer>
                <Section content>
                
               
                </Section>
            </Container>
        </ContentTag>
    

)

export default Content;

