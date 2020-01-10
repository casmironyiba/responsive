import React from 'react';
import './App.scss';
import Header from './components/Header';
import Content from './components/Content';
import MainContainer from './components/MainContainer';

const App = () => (
  <div className = 'App'>
    <MainContainer>
      <Header />
      <Content />
    </MainContainer>
  </div>
);

export default App;
