import styled, { createGlobalStyle } from 'styled-components';
import devices from './breakpoints';

const colors = {
  orange: '#E8A87C',
  lightBlue: '#85DCB',
  teal: '#41b3A3'
};

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

    html {
        min-width: 300px;
    }

    body {
        font-family: 'Open Sans';
        margin: 0
    }

    #root {
        min-width: 300px;
    }

    h1 {
        font-family: 'Lato'
    }
`;

const SiteContainer = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 5rem 3rem;

  @media only screen and ${devices.sm} {
    max-width: 60%;
  }
`;

const QuickLinks = styled.a`
  color: gray;
  margin-right: 1em;

  &::visited {
    color: gray;
  }

  &:hover {
    color: ${colors.orange};
  }
`;

export { GlobalStyles, SiteContainer, HeaderContainer, QuickLinks };
