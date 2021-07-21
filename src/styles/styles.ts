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

        @media screen and ${devices.lg} {
          font-size: 18px;
        }
    }

    body {
        font-family: 'Open Sans';
        margin: 0
    }

    #root {
        min-width: 300px;
        display: flex;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lato';
        margin: 0;
    }
`;

const SiteContainer = styled.div`
  width: 100%;
  padding: 0rem 3rem;
`;

const HeaderContainer = styled.div`
  padding: 5rem 0rem;

  h1 {
    margin: 2rem 0rem;
  }

  strong {
    color: ${colors.orange};
  }

  @media only screen and ${devices.sm} {
    max-width: 60%;
  }
`;

const QuickLink = styled.a`
  color: gray;
  margin-right: 1em;

  &::visited {
    color: gray;
  }

  &:hover {
    color: ${colors.orange};
  }
`;

const Section = styled.div`
  margin-top: 2rem;

  .cards {
    margin-top: 2rem;
  }

  .section-title {
    padding: 0rem 1rem;
  }
`;

const WorkCard = styled.div`
  border-bottom: 1px solid lightgray;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 3rem;

  @media only screen and ${devices.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const WorkCardContent = styled.div`
  .content {
    margin-top: 1rem;
  }

  .extra-info {
    margin-top: 1rem;
  }

  .links {
    margin-top: 1rem;
  }

  h3 {
    margin-bottom: 0.4rem;
  }

  h5 {
    font-weight: 300;
  }

  p {
    font-size: 0.8em;
    margin: 0;
  }

  a {
    font-size: 0.8em;
  }

  @media screen and ${devices.med} {
    padding-top: 5%;
  }
`;

const WorkCardImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    width: 75%;
    height: auto;
  }

  @media screen and ${devices.sm} {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

export {
  GlobalStyles,
  SiteContainer,
  HeaderContainer,
  QuickLink,
  Section,
  WorkCard,
  WorkCardContent,
  WorkCardImg
};
