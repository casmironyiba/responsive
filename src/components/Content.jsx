import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';
import Text from './Text';


const ContentTag = styled.div`
    grid-area:c;
    width:100%;
    height:100%;
`;

const Content = () => (
        <ContentTag>
            <Container contentContainer>
                <Section sectionContainer>
                 <Text containerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat quisquam magni. Quo, necessitatibus dignissimos consectetur consequuntur est, deleniti ex cumque totam exercitationem provident nesciunt velit quae sequi animi pariatur.</Text>
                </Section>
            </Container>
        </ContentTag>
    

)

export default Content;

