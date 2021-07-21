import React from 'react';
import { Section } from '../../styles/styles';
import { PROJECTS } from '../data';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export const Projects = (): JSX.Element => {
  return (
    <Section>
      <h2 className='section-title'>Interactive Projects</h2>
      <div className='cards'>
        {PROJECTS.map((project: ProjectCardProps) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            summary={project.summary}
            responsibilities={project.responsibilities}
            tools={project.tools}
            img={project.img}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </Section>
  );
};
