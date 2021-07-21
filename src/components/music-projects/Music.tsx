import React from 'react';
import { Section } from '../../styles/styles';
import { MUSIC_PROJECTS } from '../data';
import { MusicCard, MusicCardProps } from './MusicCard';

export const MusicProjects = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const togglePlaying = (currentlyPlaying: boolean) => {
    setIsPlaying(currentlyPlaying);
  };

  return (
    <Section>
      <h2 className='section-title'>Music Shenanigans</h2>
      {MUSIC_PROJECTS.map((project: MusicCardProps) => (
        <MusicCard
          key={project.title}
          title={project.title}
          description={project.description}
          img={project.img}
          alt={project.alt}
          audio={project.audio}
          link={project.link}
          isPlaying={isPlaying}
          setIsPlaying={togglePlaying}
        />
      ))}
    </Section>
  );
};
