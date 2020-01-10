import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';
import Container from './Container';
import ContentCard from './ContentCard';



const theme = {
        palevioletredColor : 'palevioletred',
        greenColor: 'green',
        whiteColor: 'white',
    }


const ContentTag = styled.div`
    grid-area:c;
    width:100%;
    height:100%;
    background :${theme.whiteColor};
    display: grid;
    grid-template:repeat(20,150px) / repeat(3, 1fr);

`;

const Content = () => (
    <div>
        <ContentTag>
            <Container content>
                
            </Container>
        </ContentTag>
    </div>

)

export default Content;

