import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';
import Container from './Container';
import ContentCard from './ContentCard';
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
                <Section menu/>
                <Section content/>
            </Container>
        </ContentTag>
    

)

export default Content;

