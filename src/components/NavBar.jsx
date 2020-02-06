import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route} from 'react-router-dom';
import styled,{ThemeProvider as Theme} from 'styled-components';
import NavSearch from './NavSearch';
import Logo from './Logo';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

 const theme = {
         darkColor:'#333333',
         blueColor:'blue',
         tealColor:'teal',
         whiteColor:'white',
         palevioletredColor: 'palevioletred',
         yellowColor: 'yellow'
 };


const Container = styled.div`

  *:focus {
    outline:none
  }

    width : 100%;
    height:100%;
    background : ${theme.whiteColor};
    display: flex;
    justify-content:flex-start;
    align-items:center;
    list-style:none;
    opacity:1;

    @media screen and (max-width:1600px) {
      margin:auto;
      width:100%;
      height:80px;
      .hamburger {display:none};
    }
    @media screen and (max-width:1200px) {
      margin:auto;
      width:100%;
      height:80px;
      .hamburger {display:none};
    }

    @media screen and (max-width:800px) {
      margin:auto;
      width:100%;
      height:80px;
      .navLinks {display:none};
    }
    

    @media screen and (max-width:600px) {
      margin:auto;
      width:100%;
      height:50px;
      background:green;
      .navLinks {display:none};
    };

    .hamburger:hover {
        .navLinks {
          display: flex;
          justify-content:column wrap;
          align-content:flex-start;
        };
      };
    };

`;


const NavBar = () => {
  return (
    <Container>
      <Hamburger />
      <Logo />
      <NavSearch />
      <NavLinks />
    </Container>
  )
}

export default NavBar;


// class NavBar extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//           NavLink1:"Search",
//           NavLink2:"Music",
//           NavLink3:"Videos",
//           NavLink4:"Movies",
//           NavLink5:"Apps",
//           NavLink6:"News",
         
//       }
  
//     }
//   render() {

//     return (
//    <h1></h1>
//     )
//   }
// }

// export default NavBar;

