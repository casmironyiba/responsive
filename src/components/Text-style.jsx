import styled,{ThemeProvider as Theme} from 'styled-components';

const theme = {
    color:{
        whiteColor:'white',
        blackColor:'black',
        yellowColor:'color',
        darkColor:'#333333',
    },
};



const TextStyle = styled.text`
    color:${theme.color.whiteColor};
    font-size:4rem;
    text-transorm:uppercase;
    text-align:center;



`;

export default  TextStyle;
