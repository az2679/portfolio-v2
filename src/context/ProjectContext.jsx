import { createContext, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import RenderSpace from '../components/renderHTML';

const ProjectContext = createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

const projects = [
  {
    id: 'tangible values',
    title: 'project:tangibleValues:title',
    tags: ['r3f', 'react three rapier', 'gsap', 'glsl'],
    tagsContext: ['creative coding', 'interactive'],
    tagsTechnical: ['github', 'try it'],
    link: ['https://github.com/az2679/tangible-values', 'https://az2679.github.io/tangible-values/'],
    cover: ['/documentation/TangibleValues/TangibleValues_foyer.png'],
    documentation1: [
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_dictator.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_volunteer.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_exchange.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_trust.mp4'},
    ],
    documentation2: [
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto1_dictator.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto1_volunteer.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto1_exchange.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto1_trust.mp4'},
    ],
    documentation3: [
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto2_dictator.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto2_volunteer.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto2_exchange.mp4'},
      {type: 'video', src:'/documentation/TangibleValues/TangibleValues_proto2_trust.mp4'},
    ],
    description:'project:tangibleValues:description',
    altTextContext: 'project:tangibleValues:altTextContext',
    altTextTechnical: 'project:tangibleValues:altTextTechnical',
    summary: 'project:tangibleValues:summary',
    context: 'project:tangibleValues:context',
    technical: 'project:tangibleValues:technical',
  },
  {
    id: 'the social trolley',
    title: 'project:socialTrolley:title',
    tags: ['p5.js', 'p5.play'],
    tagsContext: ['creative coding', 'interactive'],
    tagsTechnical: ['github', 'try it'],
    link: ['https://github.com/az2679/Social_Trolley_Problems', 'https://socialtrolley.netlify.app/'],
    cover: ['/documentation/SocialTrolley/SocialTrolley_home.png'],
    documentation1: [{type: 'video', src:'/documentation/SocialTrolley/SocialTrolley_demo.mp4'}],
    documentation2: [
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_sketch_jira.png'},
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_sketch_chat.png'},
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_sketch_email.png'},
    ],
    documentation3: [
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_home.png'},
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_jira.png'},
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_chat.png'},
      {type: 'image', src:'/documentation/SocialTrolley/SocialTrolley_email.png'},
    ],
    description: 'project:socialTrolley:description',
    altTextContext: 'project:socialTrolley:altTextContext',
    altTextTechnical: 'project:socialTrolley:altTextTechnical',
    summary: 'project:socialTrolley:summary',
    context: 'project:socialTrolley:context',
    technical: 'project:socialTrolley:technical',
  },
  {
    id: 'how are you',
    title: 'project:howAreYou:title',
    tags: ['javascript', 'express / node.js', 'api'],
    tagsContext: ['creative coding', 'interactive'],
    tagsTechnical: ['github'],
    link: ['https://github.com/az2679/HowAreYou'],
    cover: ['/documentation/HowAreYou/HowAreYou_start.png'],
    documentation1: [{type: 'video', src:'/documentation/HowAreYou/HowAreYou_demo.mov'}],
    documentation2: [{type: 'image', src:'/documentation/HowAreYou/HowAreYou_start.png'}],
    documentation3: [{type: 'image', src:'/documentation/HowAreYou/HowAreYou_end.png'}],
    description: 'project:howAreYou:description',
    altTextContext: 'project:howAreYou:altTextContext',
    altTextTechnical: 'project:howAreYou:altTextTechnical',
    summary: 'project:howAreYou:summary',
    context: 'project:howAreYou:context',
    technical: 'project:howAreYou:technical',
  },
  {
    id: 'gallery',
    title: 'project:gallery:title',
    tags: ['r3f', 'glsl', 'ui/ux', 'fusion360'],
  cover: ['/gallery/stainedGlass_3.png'],
  description: 'project:gallery:description',
  }
];

export const ProjectProvider = ({ children }) => {
  const { t } = useTranslation();

  const translatedProjects = projects.map((p) => ({
    ...p,
    id: p.id,
    // title: t(p.title),
    title: p.id,
    tags: p.tags,
    tagsContext: p.tagsContext,
    tagsTechnical: p.tagsTechnical,
    link: p.link,
    cover: p.cover,
    documentation1: p.documentation1,
    documentation2: p.documentation2,
    documentation3: p.documentation3,
    description: t(p.description),
    altTextContext: t(p.altTextContext),
    altTextTechnical: t(p.altTextTechnical),
    summary: <RenderSpace text={(t(p.summary))} />,
    context: <RenderSpace text={(t(p.context))} />,
    technical: t(p.technical),
  }))
  
  const [activeProject, setActiveProject] = useState(() => {
    const storedProject = localStorage.getItem('activeProject');
    return storedProject || translatedProjects[0].id;
  });

  const updateActiveProject = (projectId) => {
    localStorage.setItem('activeProject', projectId);
    setActiveProject(projectId)
  }

  const currentProject = projects.find((project) => project.id === activeProject) || translatedProjects[0];

  return (
    <ProjectContext.Provider value={{ activeProject, setActiveProject: updateActiveProject, projects: translatedProjects, currentProject }}>
      {children}
      </ProjectContext.Provider>
  );
};
