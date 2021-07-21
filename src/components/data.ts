import { ProjectCardProps } from './interactive-projects/ProjectCard';
import idyllStudioGif from '../assets/gifs/idyll-studio.gif';
import parametricPressGif from '../assets/gifs/atfoatm.gif';
import beatBasicsGif from '../assets/gifs/beat-basics.gif';
import pigsImg from '../assets/images/pigs.png';
import pigsAudio from '../assets/music/melancholic_funk.wav';
import waltzImg from '../assets/images/waltz.png';
import waltzAudio from '../assets/music/waltz.m4a';
import trainImg from '../assets/images/train.png';
import trainAudio from '../assets/music/7pm.wav';
import { MusicCardProps } from './music-projects/MusicCard';

const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Idyll Studio',
    subtitle: 'UW Interactive Data Lab, 2019-2021',
    summary:
      'A WYSIWYG editor for authoring interactive and data-driven stories',
    responsibilities: 'Open-source contributor, UI implementation and testing',
    tools: 'React, Electron',
    img: idyllStudioGif,
    codeLink: 'https://github.com/idyll-lang/idyll-studio'
  },
  {
    title: 'Anything that Flies, On Anything that Moves',
    subtitle: 'Parametric Press: Issue 01, 2019',
    summary:
      'Visualization and story exploring the magnitude and impact of aerial bombings in Southeast Asia during the 60s and 70s',
    responsibilities: 'Research, data analysis, writing, visualization',
    tools: 'React, D3, Idyll',
    img: parametricPressGif,
    siteLink:
      'https://parametric.press/issue-01/anything-that-flies-on-anything-that-moves/',
    codeLink:
      'https://github.com/ParametricPress/01-anything-that-flies-on-anything-that-moves'
  },
  {
    title: 'Beat Basics: An Explorable Explanation',
    subtitle: 'Explorables Jam, 2018',
    summary:
      'A fun little interactive explanation for desktop differentiating 3/4 and 6/8 rhythms',
    responsibilities: 'Writing, interactive graphics',
    tools: 'React, Idyll',
    img: beatBasicsGif,
    siteLink: 'https://megan-vo.github.io/basic-beats/',
    codeLink: 'https://github.com/megan-vo/basic-beats'
  }
];

const MUSIC_PROJECTS: MusicCardProps[] = [
  {
    title: 'Waltz for Teka',
    description: 'A song of gratitude. An attempt at a waltz',
    img: waltzImg,
    audio: new Audio(waltzAudio),
    link: 'https://soundcloud.com/solenye/waltz-for-teka',
    alt: '8 bit artwork'
  },
  {
    title: "Pig's Gotta Fly",
    description: 'Recorded on my iPhone one rainy day in Seattle',
    img: pigsImg,
    audio: new Audio(pigsAudio),
    alt: 'Artwork of a plane by the sea by Sydnie Vo',
    link: 'https://soundcloud.com/solenye/pigs-gotta-fly'
  },
  {
    title: '7pm',
    description: 'A collaborative ode to the best time of day',
    img: trainImg,
    audio: new Audio(trainAudio),
    link: 'https://soundcloud.com/solenye/7pm',
    alt: 'Artwork of a girl by a train station by Sydnie Vo'
  }
];

export { PROJECTS, MUSIC_PROJECTS };
