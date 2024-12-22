import { createContext, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import RenderSpace from '../components/renderHTML';

const GalleryContext = createContext();

export const useGallery = () => {
  return useContext(GalleryContext);
};

const gallery = [
  {
    id: 'population flocking',
    title: 'galleryProject:populationFlocking:title',
    tags: ['p5.js', 'visual', 'flocking behavior', 'game of life', 'genetic algorithms', 'github', 'try it'],
    link: ['https://github.com/az2679/population-flocking', 'https://az2679.github.io/population-flocking/'],
    media: [{type: 'video', src:'/gallery/populationFlocking.mp4'}],
    icon: ['./icon/sparkle.svg'],
    description: 'galleryProject:populationFlocking:description',
  },
  {
    id: 'moving gradient',
    title: 'galleryProject:movingGradient:title',
    tags: ['p5.js', 'ml5.js', 'face api', 'installation', 'interactive'],
    link: [],
    media: [
      {type: 'video', src:'/gallery/movingGradient_1.mov'},
      {type: 'video', src:'/gallery/movingGradient_2.mov'},
    ],
    icon: ['./icon/overlap.svg'],
    description: 'galleryProject:movingGradient:description',
  },
  {
    id: 'stained glass',
    title:'galleryProject:stainedGlass:title',
    tags: ['r3f', 'react three rapier', 'visual', 'github', 'try it'],
    link: ['https://github.com/az2679/stained-glass', 'https://az2679.github.io/stained-glass/'],
    media: [
      {type: 'video', src:'/gallery/stainedGlass_1.mov'},
      {type: 'image', src:'/gallery/stainedGlass_2.png'},
      {type: 'image', src:'/gallery/stainedGlass_3.png'},
    ],
    icon: ['./icon/sun.svg'],
    description: 'galleryProject:stainedGlass:description',
  },
  {
    id: 'grayscale filter',
    title: 'galleryProject:grayscaleFilter:title',
    tags: ['glsl', 'shaders', 'webcam', 'camera filter', 'graphics', 'interactive', 'try it'],
    link: ['https://editor.p5js.org/athena.zhou/full/U1aA1yWqd'],
    media: [{type: 'image', src:'/gallery/grayscaleFilter.png'}],
    icon: ['./icon/filter.svg'],
    description: 'galleryProject:grayscaleFilter:description',
  },
  {
    id: 'NYPD bot',
    title: 'galleryProject:nypdBot:title',
    tags: ['r3f', 'gsap', 'journalism', 'github'],
    link: ['https://github.com/az2679/NYPDBot'],
    media: [{type: 'video', src:'/gallery/nypdBot.mov'}],
    icon: ['./icon/robot.svg'],
    description: 'galleryProject:nypdBot:description',
  },
  {
    id: 'infridge',
    title: 'galleryProject:inFridge:title',
    tags: ['ui/ix', 'figma', 'mobile app', 'food storage', 'case study'],
    link: ['https://athenazhou.notion.site/InFridge-Case-Study-e1052daae37c4cd094a86a92502424ee?pvs=4'],
    media: [{type: 'video', src:'/gallery/inFridge.mov'}],
    icon: ['./icon/fridge.svg'],
    description: 'galleryProject:inFridge:description',
  },
  {
    id: 'fish lanterns',
    title: 'galleryProject:fishLanterns:title',
    tags: ['three.js', 'gsap', 'blender', '3d model', 'visual', 'github', 'try it'],
    link: ['https://github.com/az2679/FishLanterns', 'https://fishlanterns.netlify.app'],
    media: [
      {type: 'video', src:'/gallery/fishLantern_1.mov'},
      {type: 'image', src:'/gallery/fishLantern_2.png'},
      {type: 'image', src:'/gallery/fishLantern_3.png'},
    ],
    icon: ['./icon/fish.svg'],
    description: 'galleryProject:fishLanterns:description',
  },

  {
    id: 'flocking particles',
    title: 'galleryProject:flockingParticles:title',
    tags: ['glsl', 'shaders', 'gpu computing', 'visual','interactive', 'flocking behavior', 'point cloud', 'try it'],
    link: ['https://gfgsvs.csb.app'],
    media: [{type: 'video', src:'/gallery/flockingParticles.mov'}],
    icon: ['./icon/particle.svg'],
    description: 'galleryProject:flockingParticles:description',
  },
  {
    id: 'ethics express',
    title: 'galleryProject:ethicsExpress:title',
    tags: ['fusion360', '3d model', 'visual'],
    link: [],
    media: [
      {type: 'video', src:'/gallery/ethicsExpress_1.mp4'},
      {type: 'image', src:'/gallery/ethicsExpress_2.png'},
      {type: 'image', src:'/gallery/ethicsExpress_3.png'}
    ],
    icon: ['./icon/cable-car.svg'],
    description:'galleryProject:ethicsExpress:description',
  },
];

export const GalleryProvider = ({ children }) => {
  const { t } = useTranslation();

  const [activeProjects, setActiveProjects] = useState(new Array(gallery.length));

  const toggleProjectActiveState = (index) => {
    setActiveProjects(prev => {
      const newActiveProjects = [...prev];
      newActiveProjects[index] = !newActiveProjects[index];
      return newActiveProjects;
    })
  }

  

  const translatedGalleries = gallery.map((g) => ({
    ...g,
    title: g.id,
    description: <RenderSpace text={(t(g.description))} />
  }))

  return (
    <GalleryContext.Provider value={{ activeProjects, toggleProjectActiveState, gallery:translatedGalleries }}>{children}</GalleryContext.Provider>
  );
};
