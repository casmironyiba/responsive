import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route} from 'react-router-dom';
import styled,{ThemeProvider as Theme} from 'styled-components';
import { UnorderedList } from './UnorderedList';
import Section from './Section';
import Hamburger from './Hamburger';
import Button from './Button';
import Container from './Container';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const theme = {
        darkColor:'#333333',
        blueColor:'blue',
        tealColor:'teal',
        whiteColor:'white',
        palevioletredColor: 'palevioletred',
        yellowColor: 'yellow'
};


const NavTag = styled.div`
*:focus {
  outline:none
}

    width : 100%;
    height:100px;
    background : ${theme.whiteColor};
    display: flex;
    justify-content:flex-start;
    align-items:center;
    list-style:none;
    opacity:1


    @media screen and (max-width:2000px) {
      margin:auto;
      width:100%;
      height:120px;
      .hamburger {
        display:none;
      }
    };
    
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


class NavBar extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
          NavLink1:"Search",
          NavLink2:"Music",
          NavLink3:"Videos",
          NavLink4:"Movies",
          NavLink5:"Apps",
          NavLink6:"News",
         
      }
  
    }
  render() {
    let Icon = {
      size : '1x',
      color:theme.tealColor,
      transform : 'up-10 grow-0',
    }

    return (
      <Theme theme = {theme}>
        <NavTag>
        <Hamburger className = 'hamburger' />
         <Router>
          <Section navSection>
            <Section logo><h1>LOGO</h1></Section>
            <Container navForm>
             <Input
                placeholder = 'Search '
                navInput 
                />
                 <FontAwesomeIcon icon = 'search' transform = 'left-400 grow-0' /> 
              {/* <Button to='/'>{this.state.NavLink1}</Button>  */}
              
            </Container>
          </Section>
            
              <UnorderedList NavLinks className = 'navLinks' > 
                <li><NavLink to='/music'><FontAwesomeIcon icon = {'music'} style={Icon}/>{this.state.NavLink2}</NavLink> </li> 
                <li><NavLink to='/videos'><FontAwesomeIcon icon = {'video'} style={Icon}/>{this.state.NavLink3}</NavLink></li> 
                <li><NavLink to='/movies'><FontAwesomeIcon icon = {'film'} style={Icon}/>{this.state.NavLink4}</NavLink></li> 
                <li><NavLink to='/app'><FontAwesomeIcon icon = {'mobile'} style={Icon}/>{this.state.NavLink5}</NavLink></li> 
                <li><NavLink to='/news'><FontAwesomeIcon icon = {'newspaper'} style={Icon}/>{this.state.NavLink6}</NavLink></li> 
              </UnorderedList>
              
              <Switch>
               <Route exact path = '/' Component ='this is home' />
               <Route exact path = '/music' Component ='this is home' />
               <Route exact path = '/videos' Component ='this is videos page' />
               <Route exact path = '/movies' Component ='this is movies page' />
               <Route exact path = '/app' Component ='this is app page' />
               <Route exact path = '/news' Component ='this is news page' />
              </Switch>
              
          </Router>
        </NavTag>
      </Theme>
    )
  }
}

export default NavBar;

