import React from 'react';
import { HeaderContainer, QuickLink } from '../styles/styles';
import resume from '../assets/pdf/resume_website_2021.pdf';

interface LinkProps {
  href: string;
  name: string;
}

const links: LinkProps[] = [
  { href: 'https://github.com/megan-vo', name: 'Github' },
  { href: 'https://www.linkedin.com/in/megan-vo-5b9031216/', name: 'LinkedIn' },
  { href: resume, name: 'Resume' }
];

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <h1>Hi there, I’m Megan Vo</h1>
      <p>
        I enjoy working on <strong>interactive projects and tools</strong> that
        help people tell stories and connect with one another. In my free time,
        I like to learn about <strong>writing, music, and technology,</strong>{' '}
        and figuring out how to use those mediums to create things for others.
      </p>
      <p>
        I'm currently based in Seattle, but you can find me around other parts
        of the web below.
      </p>

      <div>
        {links.map((link: LinkProps) => (
          <QuickLink key={link.name} href={link.href} target='_blank'>
            {link.name}
          </QuickLink>
        ))}
      </div>
    </HeaderContainer>
  );
};
