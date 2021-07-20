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
    body {
        font-family: 'Open Sans'
    }

    h1 {
        font-family: 'Lato'
    }
`;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 5rem 3rem;
  width: 60%;

  @media only screen and ${devices.sm} {
    width: 100%;
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

export { GlobalStyles, HeaderContainer, QuickLinks };
