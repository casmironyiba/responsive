import styled from 'styled-components';

const theme = {
    color: {
        whiteColor:'white',
        redColor : 'red',
        blueColor : 'blue',
        yellowColor : 'yellow',
        tealColor: 'teal',
        palevioletredColor:'palevioletred',
        blackColor:'black'
    }
};


const Text = styled.text`
    color: ${props => props.title ? theme.color.whiteColor : theme.color.blackColor};
    font-family: geogia;
    text-transform: uppercase;
    font-size: ${props => props.title ? '4rem' : ''};
    text-align : ${props => props.title ? 'center' : 'left'};
    background:${theme.color.tealColor};
    height:80px;
    position:relative;
    top:20px;
    border-radius:50px 0px 50px 0px;
    //border: 5px dotted ${theme.color.blackColor};
    text-shadow: 5px 5px 10px brown;
    box-shadow: 10px 10px 10px black;
    &::before {
        content: '';
        width:640px;
        height:5px;
        background:yellow;
        position:absolute;
        top:-5px;
        left:40px;
    };

    &::after {
        content: '';
        width:640px;
        height:5px;
        background:yellow;
        position:absolute;
        top:75px;
        left:1px;
    };

    @media screen and (max-width:2000px) {
      font-size: 4rem;
      height:90px;
      &::before {
        width:640px;
      };
      &::after {
        width:640px;
        top:90px;
    };
    };

    @media screen and (max-width:1600px) {
      font-size: 4rem;
      height:80px;
      &::before {
        width:640px;
      };
      &::after {
        width:640px;
        top:80px;
    };

    @media screen and (max-width:1200px) {
      font-size: 3.2rem;
      height:60px;
      &::before {
        width:503px;
      };
      &::after {
        width:500px;
        top:60px;
    };

    @media screen and (max-width:800px) {
        font-size: 3rem;
        height:60px;
        &::before {
          width:470px;
        };
        &::after {
          width:470px;
          top:60px;
        };
    };

    @media screen and (max-width:600px) {
            font-size: 2rem;
            height:40px;
            &::before {
              width:300px;
            };
            &::after {
              width:300px;
              top:40px
            };
        };
`;

export default  Text;