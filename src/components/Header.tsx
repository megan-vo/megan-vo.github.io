import React from 'react';
import { HeaderContainer, QuickLinks } from '../styles/styles';

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <h1>Hi, I’m Megan Vo</h1>
      <p>
        I enjoy working on <b>interactive projects and tools</b> that help
        people tell stories and connect with one another. In my free time, I
        like to learn about writing, music, and technology, and figuring out how
        to use those mediums to create things for others.
      </p>

      <div>
        <QuickLinks href='https://github.com/megan-vo' target='_blank'>
          Github
        </QuickLinks>
        <QuickLinks
          href='https://www.linkedin.com/in/megan-vo-5b9031216/'
          target='_blank'>
          LinkedIn
        </QuickLinks>
      </div>
    </HeaderContainer>
  );
};
