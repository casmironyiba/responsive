import React from 'react';
import {BrowserRouter as Router, Switch, NavLink, Route} from 'react-router-dom';
import styled,{ThemeProvider as Theme} from 'styled-components';
import { UnorderedList } from './UnorderedList';
import Section from './Section';
import Hamburger from './Hamburger';

const theme = {
        darkColor:'#333333',
        blueColor:'blue',
        tealColor:'teal',
};


const NavTag = styled.div`
    width : 100%;
    height:100px;
    background : ${theme.blueColor};
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
          NavLink1:"Home",
          NavLink2:"Music",
          NavLink3:"Videos",
          NavLink4:"Movies",
          NavLink5:"Apps",
          NavLink6:"News",
         
      }
    }
    
  render() {
    return (
      <Theme theme = {theme}>
        <NavTag>
        <Hamburger className = 'hamburger' />
         <Router>
          <Section NavSection>
            {/* <li> <Button to='/'>{this.state.NavLink1}</Button> </li> */}
          </Section>
            
              <UnorderedList NavLinks className = 'navLinks' > 
                <li> <NavLink to='/music'>{this.state.NavLink2}</NavLink> </li> 
                <li> <NavLink to='/videos'>{this.state.NavLink3}</NavLink> </li> 
                <li> <NavLink to='/movies'>{this.state.NavLink4}</NavLink> </li> 
                <li> <NavLink to='/app'>{this.state.NavLink5}</NavLink> </li> 
                <li> <NavLink to='/news'>{this.state.NavLink6}</NavLink> </li> 
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

