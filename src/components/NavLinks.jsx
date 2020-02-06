import React from 'react';
import styled, { ThemeProvider as Theme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Section from './Section';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';

const theme = {
    darkColor:'#333333',
    blueColor:'blue',
    tealColor:'teal',
    whiteColor:'white',
    palevioletredColor: 'palevioletred',
    yellowColor: 'yellow'
};

const UL = styled.ul`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-flow: row wrap;
    list-style:none;
    background: transparent;
    margin-left: auto;
    //background:red
    
    a {
        text-decoration: none;
        color:black;
    };
    
`;

const Container = styled.div`
    width: 55%;
    height:100%;

    @media screen and (max-width:)
`;


const NavLinks = () => {
    let Icon = {
        size : 'xl',
        color:'blue',//theme.tealColor,
        transform : 'up-10 left--50 grow-0',
      }
        return (
    <Theme theme={theme}>
        <Container>
            <Router>
            <UL> 
                {/* <FontAwesomeIcon icon='search' transform = 'left-400 grow-0' /> */}
                <li><NavLink to='/music'><FontAwesomeIcon icon = {'music'} style={Icon}/>Music</NavLink> </li> 
                <li><NavLink to='/videos'><FontAwesomeIcon icon = {'video'} style={Icon}/>Videos</NavLink></li> 
                <li><NavLink to='/movies'><FontAwesomeIcon icon = {'film'} style={Icon}/>Movies</NavLink></li> 
                <li><NavLink to='/app'><FontAwesomeIcon icon = {'mobile'} style={Icon}/>App</NavLink></li> 
                <li><NavLink to='/news'><FontAwesomeIcon icon = {'newspaper'} style={Icon}/>News</NavLink></li>
            </UL>

            <Switch>
                <Route exact path = '/' Component ='this is home' />
                <Route exact path = '/music' Component ='this is home' />
                <Route exact path = '/videos' Component ='this is videos page' />
                <Route exact path = '/movies' Component ='this is movies page' />
                <Route exact path = '/app' Component ='this is app page' />
                <Route exact path = '/news' Component ='this is news page' />
            </Switch>
            </Router>
        </Container>
    </Theme>

        )
};
export default NavLinks;
