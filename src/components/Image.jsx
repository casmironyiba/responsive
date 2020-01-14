import styled from 'styled-components';
import React from 'react';

const Images = {
  {imgName: 'image1'; imgUrl : "../images/image1"}; 
  {imgName: 'image2'; imgUrl : "../images/image2"};
  {imgName: 'image3'; imgUrl : "../images/image3"};
  {imgName: 'image4'; imgUrl : "../images/image4"};
  {imgName: 'image5'; imgUrl : "../images/image5"};


}



const Image =styled.image`
    width:500px;
    height:500px;
    background-image:'url(${props => props.imgName.imgUrl})';
    background-position:100%;



`;

export default Image;
