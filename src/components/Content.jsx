import React from 'react';
import styled,{ThemeProvider as Theme} from 'styled-components';


const theme = {
    color: {
        palevioletredColor : 'palevioletred',
    }
}

const ContentTag = styled.div`
    width:100%;
    height:100%;
    background :${this.theme.color.palevioletredColor};
    display: grid;
    grid-template:repeat(20,150px) / repeat(3, 1fr);

`;

const Content = () => (
    <div>
        <ContentTag>
            <h3>this is cotent</h3>
        </ContentTag>
    </div>

)

export default Content;

