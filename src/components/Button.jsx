import styled from 'styled-components';

const theme = {
    primary: 'teal',
    secondary: 'yellow',
    palevioletredColor: 'palevioletred'
}

const Button = styled.button`
    width:80px;
    height: 30px;
    background: ${theme.palevioletredColor}
    color: ${props => props.primary ? theme.primary : theme.secondary};
    position:relative;
    border-radius:10px;

`;

export default Button;
