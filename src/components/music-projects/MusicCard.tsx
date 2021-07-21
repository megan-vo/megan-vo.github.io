import React from 'react';
import {
  MusicCardContainer,
  MusicCardContent,
  MusicCardImg,
  QuickLink
} from '../../styles/styles';

export interface MusicCardProps {
  title: string;
  description: string;
  img: any;
  audio: HTMLAudioElement;
  alt: string;
  link: string;
}

export interface MusicTrackProps extends MusicCardProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const MusicCard = (props: MusicTrackProps): JSX.Element => {
  const { title, description, img, alt, audio, link, isPlaying, setIsPlaying } =
    props;

  const playAudio = () => {
    if (audio.paused && !isPlaying) {
      audio.loop = true;
      audio.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <MusicCardContainer>
      <MusicCardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <QuickLink href={link} target='_blank'>
          Full Version
        </QuickLink>
      </MusicCardContent>
      <MusicCardImg>
        <img src={img} alt={alt} />
        {audio.paused ? (
          <PlayButton onClick={playAudio} />
        ) : (
          <PauseButton onClick={pauseAudio} />
        )}
      </MusicCardImg>
    </MusicCardContainer>
  );
};

interface AudioButtonProps {
  onClick: (value: any) => void;
}

const PauseButton = (props: AudioButtonProps) => {
  return (
    <svg
      onClick={props.onClick}
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'>
      <path
        d='M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320
	c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320
	c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z'
      />
    </svg>
  );
};

const PlayButton = (props: AudioButtonProps) => {
  return (
    <svg
      onClick={props.onClick}
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 60 60'>
      <path
        d='M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15
	C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884
	c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z'
      />
    </svg>
  );
};
