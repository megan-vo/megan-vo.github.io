import React from 'react';
import {
  WorkCard,
  QuickLink,
  WorkCardContent,
  WorkCardImg
} from '../../styles/styles';

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  summary: string;
  responsibilities: string;
  tools: string;
  img: any;
  codeLink: string;
  siteLink?: string;
}

export const ProjectCard = (props: ProjectCardProps): JSX.Element => {
  const {
    title,
    subtitle,
    summary,
    responsibilities,
    tools,
    img,
    siteLink,
    codeLink
  } = props;

  return (
    <WorkCard>
      <WorkCardImg>
        <img src={img} />
      </WorkCardImg>
      <WorkCardContent>
        <h3>{title}</h3>
        <h5>
          <em>{subtitle}</em>
        </h5>
        <div className='content'>
          <p>{summary}</p>
          <div className='extra-info'>
            <p>
              <strong>Responsibilities:</strong> {responsibilities}
            </p>
            <p>
              <strong>Tools:</strong> {tools}
            </p>
          </div>
          <div className='links'>
            {siteLink ? (
              <QuickLink href={siteLink} target='_blank'>
                site
              </QuickLink>
            ) : (
              <></>
            )}
            <QuickLink href={codeLink} target='_blank'>
              code
            </QuickLink>
          </div>
        </div>
      </WorkCardContent>
    </WorkCard>
  );
};
