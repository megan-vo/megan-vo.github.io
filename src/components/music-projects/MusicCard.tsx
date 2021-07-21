import React from 'react';

export interface MusicCardProps {
  title: string;
  description: string;
  img: string;
  audio: string;
  alt: string;
}

export const MusicCard = (props: MusicCardProps): JSX.Element => {
  const { title, description, img, alt } = props;

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};
