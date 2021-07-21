import React from 'react';
import { GlobalStyles, SiteContainer } from '../styles/styles';
import { Header } from './Header';
import { MusicProjects } from './music-projects/Music';
import { Projects } from './interactive-projects/Projects';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <SiteContainer>
        <GlobalStyles />
        <Header />
        <Projects />
        <MusicProjects />
      </SiteContainer>
    );
  }
}
