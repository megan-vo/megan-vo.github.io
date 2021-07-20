import React from 'react';
import { GlobalStyles, SiteContainer } from '../styles/styles';
import { Header } from './Header';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <SiteContainer>
        <GlobalStyles />
        <Header />
      </SiteContainer>
    );
  }
}
