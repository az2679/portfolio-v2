import React, { createContext, useState, useContext } from 'react';

const GalleryContext = createContext();

export const useGallery = () => {
  return useContext(GalleryContext);
};

const gallery = [
  {
    title: 'population flocking',
    tags: ['p5.js', 'visual', 'flocking behavior', 'game of life', 'genetic algorithms', 'github', 'try it'],
    link: ['https://github.com/az2679/population-flocking', 'https://az2679.github.io/population-flocking/'],
    media: [{type: 'video', src:'/gallery/populationFlocking.mp4'}],
    icon: ['./icon/sparkle.svg'],
    description: (
      <>
        A self propagating visual of stars flocking, growing and dying inspired by Craig Reynold&apos;s Flocking
        Simulation, John Horton Conway&apos;s Game of Life, and genetic algorithms.
        <br />
        <br />
        At first stars populate the screen randomly. Then they begin to form clusters, flocking, or moving, together. If
        there are too many stars in a group, that group faces overpopulation and each star in that group is more
        inclined to separate from the group. However, if there are too few stars in a group, the group is in a state of
        underpopulation, where each star is more drawn to its surrounding stars.
        <br />
        <br />
        Each star also has a life force, decreasing when in a state of over or under population and increasing when in a
        stable population group over time. If the star is at full health for a duration of time, a new star will be born
        near it. However, if the star loses all its health, the star burns out and dies.
        <br />
        <br />
        Overtime, the stars also learn how much to navigate between population states better, as long lasting stars pass
        on information to new generations about how much to separate from an overpopulated group and how to better find
        other stars when underpopulated.
        <br />
        <br />I have always been interested in studying human behavior, so I was immediately drawn to these concepts
        that revolved around breaking down and simulating different behavior that we see. The game of life involved
        rather simple rules that produces robust and captivating results that are self propagating and cyclic in nature.
        The rules capture a self correcting dynamic or population levels and with how flexible the rules are structured,
        it seemed plausible to broaden the relationship to include other elements from human behavior. Subsequently,
        this project is an endeavor to such explorations.
      </>
    ),
  },
  {
    title: 'moving gradient',
    tags: ['p5.js', 'ml5.js', 'face api', 'installation', 'interactive'],
    link: [],
    media: [
      {type: 'video', src:'/gallery/movingGradient_1.mov'},
      {type: 'video', src:'/gallery/movingGradient_2.mov'},
    ],
    icon: ['./icon/overlap.svg'],
    description: (
      <>
        A visual installation that responds to the detection of people walking by and their location as they move. Sets
        of 3 particles are created for each person and changes color, while even following the individual, according to
        where they are in space. The result is a harmonizing gradient of color that depicts the independent interactions
        between different individuals.
        <br />
        <br />
        Moving Gradient is inspired by the interplay of two previous projects, relating to changing a linear gradient
        and processing segments of the gradient to project a synthesized color and corresponding music note. From this
        combination, I became interested in how an interaction could be formed when two people are separately
        interacting with different objects. For this project, I was motivated to look at the greater feedback loop of
        interactions facilitated by our environment in a more playful way.
      </>
    ),
  },
  {
    title: 'stained glass',
    tags: ['r3f', 'react three rapier', 'visual', 'github', 'try it'],
    link: ['https://github.com/az2679/stained-glass', 'https://az2679.github.io/stained-glass/'],
    media: [
      {type: 'video', src:'/gallery/stainedGlass_1.mov'},
      {type: 'image', src:'/gallery/stainedGlass_2.png'},
      {type: 'image', src:'/gallery/stainedGlass_3.png'},
    ],
    icon: ['./icon/sun.svg'],
    description: (
      <>
        A simulation of light particles passing through stained glass, emulating streams of color, before eventually
        fading out of vision.
        <br />
        <br />
        Particles stream out from an emitter at an interval rate before a seeking force is applied that steers the
        particles towards the nearest detected glass pannel. Upon intersection, the particles acquire the same color as
        the glass pannel and begin decreasing their lifespan and eventually fading out.
      </>
    ),
  },
  {
    title: 'grayscale filter',
    tags: ['glsl', 'shaders', 'webcam', 'camera filter', 'graphics', 'interactive', 'try it'],
    link: ['https://editor.p5js.org/athena.zhou/full/U1aA1yWqd'],
    media: [{type: 'image', src:'/gallery/grayscaleFilter.png'}],
    icon: ['./icon/filter.svg'],
    description: (
      <>
        A luminance grayscale with contrast and sobel edge detection that detected against a combination of red and
        green values.
        <br />
        <br />I also wanted to add color back into the visual through interactivity. So, with a mouse drag, a radius of
        fragments are colored with the original camera colors.
      </>
    ),
  },
  {
    title: 'NYPD bot',
    tags: ['r3f', 'gsap', 'journalism', 'github'],
    link: ['https://github.com/az2679/NYPDBot'],
    media: [{type: 'video', src:'/gallery/nypdBot.mov'}],
    icon: ['./icon/robot.svg'],
    description: (
      <>
        A visual journalism article about the New York Police Department K5 Robot, with the main intention of
        demonstrating a potential interaction someone would have with the robot in reporting an incident. After
        highlighting functional features of the robot, a synopsis of public sentiment is commented and remarks are made
        about common concerns regarding the robot.
      </>
    ),
  },
  {
    title: 'infridge',
    tags: ['ui/ix', 'figma', 'mobile app', 'food storage', 'case study'],
    link: ['https://athenazhou.notion.site/InFridge-Case-Study-e1052daae37c4cd094a86a92502424ee?pvs=4'],
    media: [{type: 'video', src:'/gallery/inFridge.mov'}],
    icon: ['./icon/fridge.svg'],
    description: (
      <>
        A mobile app that aids home cooks in decreasing food waste and practice food safety by providing information on
        proper food storage and tracking shelf life and household inventory.
        <br />
        <br />A problem cooks face at home is frequent food spoilage due to improper food storage. When seemingly fresh
        produce goes bad within a week, it’s a constant challenge to preserve the freshness of ingredients, raising
        concerns of produce going bad before it could be used. This challenge proves especially difficult for people
        living alone or in food desserts. By helping people who cook at home store food properly and track the shelf
        life of food they have stored, we will decrease the amount of food wasted in consumer homes.
      </>
    ),
  },
  {
    title: 'fish lanterns',
    tags: ['three.js', 'gsap', 'blender', '3d model', 'visual', 'github', 'try it'],
    link: ['https://github.com/az2679/FishLanterns', 'https://fishlanterns.netlify.app'],
    media: [
      {type: 'video', src:'/gallery/fishLantern_1.mov'},
      {type: 'image', src:'/gallery/fishLantern_2.png'},
      {type: 'image', src:'/gallery/fishLantern_3.png'},
    ],
    icon: ['./icon/fish.svg'],
    description: (
      <>
        An anthropomorphization of a parade of fish lanterns swimming across the screen.
        <br />
        <br />
        Inpsired by fish lanterns decoratively hung from the ceiling and held by cheerful patrons in night markets or
        festivals, I created a similar centerpiece of a hollow 3D model with a wireframe skeleton and flickering flame
        inside that bobs along the lanterns dancing beside it. Similar fish lanters of various sizes begin to float
        across, illuminated by a rainbow of lights.
      </>
    ),
  },

  {
    title: 'flocking particles',
    tags: ['glsl', 'shaders', 'gpu computing', 'visual','interactive', 'flocking behavior', 'point cloud', 'try it'],
    link: ['https://gfgsvs.csb.app'],
    media: [{type: 'video', src:'/gallery/flockingParticles.mov'}],
    icon: ['./icon/particle.svg'],
    description: (
      <>
        A glsl implementation of Craig Reynold&apos;s Flocking Behavior in 3D using GPU computing with a point cloud.
        <br />
        <br />
        In this sketch, particles flock together, simulating flocking behavior commonly seen in birds. The flocking
        behavior is a combination of 3 steering forces: alignment, cohesion, and separation. I have included sliders to
        visualize differing weights of each force, as well as to provide an opportunity to see the forces isolated.
      </>
    ),
  },
  {
    title: 'ethics express',
    tags: ['fusion360', '3d model', 'visual'],
    link: [],
    media: [
      {type: 'video', src:'/gallery/ethicsExpress_1.mp4'},
      {type: 'image', src:'/gallery/ethicsExpress_2.png'},
      {type: 'image', src:'/gallery/ethicsExpress_3.png'}
    ],
    icon: ['./icon/cable-car.svg'],
    description: (
      <>A 3D model of a californian trolley replicating The Ethics Express trolley used in The Good Place.</>
    ),
  },
];

export const GalleryProvider = ({ children }) => {
  const [activeProjects, setActiveProjects] = useState(new Array(gallery.length));

  const toggleProjectActiveState = (index) => {
    setActiveProjects(prev => {
      const newActiveProjects = [...prev];
      newActiveProjects[index] = !newActiveProjects[index];
      return newActiveProjects;
    })
  }

  return (
    <GalleryContext.Provider value={{ activeProjects, toggleProjectActiveState, gallery }}>{children}</GalleryContext.Provider>
  );
};
