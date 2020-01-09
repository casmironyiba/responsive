import styled from 'styled-components';

const theme = {
    primary: 'teal',
    secondary: 'yellow',
    palevioletredColor: 'palevioletred'
}

const Button = styled.button`
    width:120px;
    height: 50px;
    background: ${theme.palevioletredColor}
    color: ${props => props.primary ? theme.primary : theme.secondary};
    position:relative;
    border-radius:15px 0px 15px 0px

`;

export default Button;
