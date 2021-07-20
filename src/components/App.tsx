import React from 'react';
import { GlobalStyles } from '../styles/styles';
import { Header } from './Header';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
      </div>
    );
  }
}
