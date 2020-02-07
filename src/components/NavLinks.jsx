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
    yellowColor: 'yellow',
    purpleColor:'purple'
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
    background:${theme.purpleColor};
    border-radius:100px 0px 0px 0px;
    a {
        text-decoration: none;
        color:${theme.yellowColor};
    };
    
    `;
    
    const Container = styled.div`
    width: 55%;
    height:100%;

    @media screen and (max-width:)
`;

const LI = styled.li`
    width:80px;
    height:30px;
    //background:brown

&:hover {
    background:black;
    transition: 1s
}


`

const NavLinks = () => {
    let Icon = {
        color:theme.tealColor,
        
      }
        return (
    <Theme theme={theme}>
        <Container>
            <Router>
            <UL> 
                {/* <FontAwesomeIcon icon='search' transform = 'left-400 grow-0' /> */}
        
                <LI><NavLink to='/music'><FontAwesomeIcon icon = {'music'} style={Icon} fixedWidth /* transform='up-.2 left-.6 grow-0' *//>Music</NavLink> </LI> 
                <LI><NavLink to='/videos'><FontAwesomeIcon icon = {'video'} style={Icon} fixedWidth />Videos</NavLink></LI> 
                <LI><NavLink to='/movies'><FontAwesomeIcon icon = {'film'} style={Icon} fixedWidth/>Movies</NavLink></LI> 
                <LI><NavLink to='/app'><FontAwesomeIcon icon = {'mobile'} style={Icon} fixedWidth/>App</NavLink></LI> 
                <LI><NavLink to='/news'><FontAwesomeIcon icon = {'newspaper'} style={Icon} fixedWidth/>News</NavLink></LI>
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
