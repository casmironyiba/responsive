import styled from 'styled-components';

const Animation = styled.text`
    animation:${props => props.title ? 'title' : props.Nav ? 'Nav' : ''};
    animation-duration:1s;
    animation-fill-mode:${props => props.title ? 'forwards' :'forward'};
    animation-timing-function: ease-in-out;
    position:relative;

    @keyframes title {
        0% { top: -200px}
           
        100% {top:-5px }
    }
`;
export default Animation;