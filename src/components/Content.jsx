import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';



const theme = {
        palevioletredColor : 'palevioletred',
        greenColor: 'green',
        whiteColor: 'white',
    }


const ContentTag = styled.div`
    grid-area:c;
    width:100%;
    height:100%;
    background :${theme.greenColor};

`;

const Content = () => (
        <ContentTag>
            <Container contentContainer>
                <Section content>
                    <h1>welcome</h1>
                </Section>
            
            </Container>
        </ContentTag>
    

)

export default Content;

