import styled from 'styled-components';
import React from 'react';

const Background =styled.image`
    width:500px;
    height:500px;
    background-image:url('/src/images/image1');
    background-position:100%;



`

const BackgroundImage = () => {
  return (
    <Background>

    </Background>
  )
}

export default BackgroundImage;
