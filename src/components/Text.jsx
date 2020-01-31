import styled from 'styled-components';

const theme = {
        whiteColor:'white',
        redColor : 'red',
        blueColor : 'blue',
        yellowColor : 'yellow',
        tealColor: 'teal',
        palevioletredColor:'palevioletred',
        blackColor:'black'
};


const Text = styled.text`
    color: 
      ${props => props.title ? theme.whiteColor 
      :props.containerText ? theme.yellowColor
      :theme.color.blackColor};
    font-family:  ${props => props.title ? 'geogia' :''};
    text-transform:  ${props => props.title ? 'uppercase' : ''};
    font-size: ${props => props.title ? '4rem' : ''};
    text-align : ${props => props.title ? 'center' : 'left'};
    background:${props => props.title ? theme.tealColor : ''};
    height:  
      :${props => props.textContainer ?'70px' 
      :props.title ? '100%' 
      :''};
    position: ${props => props.title ? 'relative' : ''};
    top:  ${props => props.title ? '20px' : ''};
    border-radius:  ${props => props.title ? '50px 0px 50px 0px' : ''};
    text-shadow:  ${props => props.title ? '5px 5px 10px brown' :''};
    box-shadow:  ${props => props.title ? '10px 10px 10px black' :''};
    opacity: ${props =>props.sectionContainer ? 1 : ""};
    z-index: ${props =>props.sectionContainer ? 2 : ""};

    //////////////////////// Animations starts/////////////////////

/*     animation: Title;
    animation-duration:1s;
    animation-fill-mode:forwards;
    animation-timing-function: ease-in-out;
    position:relative;

    @keyframes Title {
        0% {top: -100px}
        
        100% {top:50px}    
    };
 */
    //////////////////////// Animations ends/////////////////////
    &::before {
        content: ${props => props.title ?' "" ' : ''};
        width: ${props => props.title ? '640px' : ''};
        height: ${props => props.title ? '5px' :''};
        background: ${props => props.title ? 'yellow' : ''};
        position: ${props => props.title ? 'absolute' : ''};
        top: ${props => props.title ? '-5px' : ''};
        left: ${props => props.title ? '40px' : ''};
    };

    &::after {
        content: ${props => props.title ?' "" ' : ''};
        width: ${props => props.title ? '640px' : ''};
        height: ${props => props.title ? '5px' :''};
        background: ${props => props.title ? 'yellow' :''};
        position: ${props => props.title ? 'absolute' :''};
        top: ${props => props.title ? '75px' :''};
        left: ${props => props.title ? '1px' :''};
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
        top:70px;
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