import styled, { createGlobalStyle } from 'styled-components';
import devices from './breakpoints';

const colors = {
  orange: '#E8A87C',
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
    text-align: center;

    @media screen and ${devices.xs} {
      text-align: left;
    }
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

const MusicCardContainer = styled.div`
  display: grid;
  padding: 2rem 1rem;
  grid-template-rows: 0.5fr 1fr;
  border-bottom: 1px solid lightgray;
  border-radius: 20px;

  @media screen and ${devices.xs} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const MusicCardContent = styled.div`
  text-align: center;
  padding: 5% 0;

  @media screen and ${devices.xs} {
    text-align: left;
  }
`;

const MusicCardImg = styled.div`
  justify-self: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 10em;
    height: auto;
  }

  svg {
    height: 1.3rem;
    position: absolute;
    top: 40%;
    left: 5em;
    opacity: 60%;

    &:hover {
      opacity: 100%;
    }
  }

  @media screen and ${devices.xs} {
    justify-self: right;
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
  WorkCardImg,
  MusicCardContainer,
  MusicCardContent,
  MusicCardImg
};
