import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

const projects = [
  {
    title: 'tangible values',
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
    description:
      'A digital gallery space for direct interaction with thought experiments, providing a dynamic environment for exploration and contemplation.',
    altTextContext:
      'This project went through many iterations. However, I knew I wanted to emulate an art gallery, with a focus on the presentation of thought experiments. So, I planned to make small scenes with a location marker and an interactive task.',
    altTextTechnical:
      'In the second iteration, I was more conscientious of what followed after making a decision, which led to animations based on what the counterpart computer-generated action was in each scenario.',
    summary: (
      <>
        I am an over-thinker, but for the most part, it is because I like thinking. I wanted to use this project to
        share a part of what I like and to create a space for you to think about various things as well. This project is
        an interactive website with 3D elements that showcase 4 thought experiments and allow for people to act upon the
        decision presented in each thought experiment prompt.
        <br />
        <br />
        Traveling past the introductory foyer, you will come across an onboarding experience demonstrated through the
        Dictator Game. Upon completion, I invite you to freely navigate to areas presenting the Volunteer Dilemma,
        Exchange Game, and Trust Game. In each area, a floating diamond will be your point of contact, revealing the
        area’s respective thought experiment prompt and relaying instructions on completing the corresponding
        interactive component.
        <br />
        <br />
        The goal of this project is to make the experience of thought experiments more engaging by improving the
        tangibility of values upheld whilst thinking through the various scenarios. The implementations I have made are
        centered around adding interactivity to conventionally written text, using technology to showcase this
        experience visually in a digital realm and representing decisions made with actions taken. In making values more
        tangible, I hope to inspire reflection on what people care about and possible reasons behind their actions.
      </>
    ),
    context: (
      <>
        Why do I do the things I do? I deeply contemplate the motivations behind my behavior as a means of understanding
        myself, whether it’s an execution of values, an impulse of emotions, or a response to situational factors. These
        motives communicate both identity and tendencies, offering insights into the temporality of each passing state
        in which I exist. As such, I was happy to make a small part of that process - viewing actions as a window to our
        thoughts and feelings - a part of my project and share the same musings with other people.
        <br />
        <br />
        I find particular interest in experimental games and thought dilemmas because they consist of base units of
        logic applicable across various contexts, while also yielding insights about a person in a light-hearted,
        hypothetical presentation. The controlled environment that thought experiments are depicted in minimizes the
        impact of situational factors and other persuasive contexts have on decision making. As a result, such decisions
        more closely represent our internal beliefs and typically take the form of an action in a situation.
        <br />
        <br />
        However, the focus of the project, more broadly, is making the experience people have when engaging with thought
        experiments more robust. The implementations I have made to improve engagement are centered around adding
        interactivity to conventionally written text, using technology to showcase this experience visually in a digital
        realm and representing decisions made with actions taken. Through improving the tangibility of actions, these
        efforts give some tangibility to values upheld when thinking through the scenarios presented.
      </>
    ),
    technical:
      'This project is written in React Three Fiber and uses the React Three Rapier physics library. Animations are handled with GSAP. The loading screen was written in GLSL. Set in a 3rd person viewpoint, keyboard controls will be the primary method of engagement in this experience, along with some mouse interactivity.',
  },
  {
    title: 'the social trolley',
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
    description:
      'A web experience that explores 3 social situations with a utilitarian and deontological framework modeled after the Trolley Problem.',
    altTextContext:
      'Each social situation examines various challenges to collaboration across different types of relationships. Drawing references from Jira, Apple Messages, and Microsoft Outlook, I wanted to emphasize the social aspect with digital environments characteristic of modern interactions.',
    altTextTechnical:
      'The first situation prompts how exploitation, fair distribution, and responsibility are handled in workplace dynamics. The second situation probes at rejection, judgement, and trust in interpersonal relationships. The third situation examines honesty and blue lies against ingroup and outgroup identification.',
    summary:
      'The Social Trolley is a web experience that explores three social situations that are modeled after the Trolley Problem thought experiment by Philippa Foot (1967). Using a utilitarian and deontological framework, a decision is prompted in response to the presented contextual information. The experience prefaces with a simplified narration of the Trolley Problem and debriefs with the conceptualization of each social situation. Wrapped in y2k retro windows with homage to pixel art detailing, various challenges to collaboration and causes of conflict are presented across different stages of interpersonal relationships.',
    context:
      'This project aims to investigate the connection between our social principles and moral beliefs. Specifically, I am curious as to whether our reasons for acting in social situations are similar to how we would act in moral situations and uncovering if our social principles even have moral underpinnings. In the experience, social acceptability of one action over another is evaluated while engaging with one’s own social principles in decision making.',
    technical:
      'This project is written in p5.js and uses the p5.play physics library. The primary form of engagement is through mouse interaction. ',
  },
  {
    title: 'how are you',
    tags: ['javascript', 'express / node.js', 'api'],
    tagsContext: ['creative coding', 'interactive'],
    tagsTechnical: ['github'],
    link: ['https://github.com/az2679/HowAreYou'],
    cover: ['/documentation/HowAreYou/HowAreYou_start.png'],
    documentation1: [{type: 'video', src:'/documentation/HowAreYou/HowAreYou_demo.mov'}],
    documentation2: [{type: 'image', src:'/documentation/HowAreYou/HowAreYou_start.png'}],
    documentation3: [{type: 'image', src:'/documentation/HowAreYou/HowAreYou_end.png'}],
    description:
      'A short exchange of small talk with a doorman inside an elevator as you wait to reach your floor. “Hi, how are you?” “I’m good, how are you?”',
    altTextContext:
      'I was inspired by my professor’s quip about touring an apartment once that had a doorman in the elevator and centered the project’s imagery around an elevator operator. The main image was generated through Pixlr with a text prompt and isometric art style preset.',
    altTextTechnical:
      'Starting out, my project was a mash up of three different text analyzing processes. However, the interaction design started following a story, and I even found myself curious about what was going on behind the visual. Thus, a thought bubble served as a connection point between the displayed chat and chat generation. ',
    summary: (
      <>
        This project begins with the scene of an AI generated image of a doorman inside an elevator prompting you, “How
        are you?” The scene includes a thought bubble, revealing what the doorman is thinking, as well as 3 interaction
        buttons, “Respond,” “Follow-Up,” and “Ignore.” When choosing to respond to the doorman, a text field will pop up
        with notes that reflect your inner thoughts. In this case, “The doorman just asked you how you are. Gotta say
        something now…” After the initial exchange passes, you can follow-up, where your inner monologue is saying
        “Quick ! Give another response, how else are you doing? Keep the convo going :&lt;”. Alternatively, you can opt
        to say nothing and ignore the doorman all together, where you “Pretend you don’t hear anything and there’s no
        one else here. Go to push an elevator button →”.
        <br />
        <br />
        In the response route, the doorman also relays how they are doing. That response is generated with markov chains
        from past responses and reformatted with a large language model (LLM). The generated markov is displayed as the
        thought behind what they say in their chat bubble, which is the LLM reformatting. In the follow-up action, the
        doorman sympathizes by revealing other people that may feel similarly to how you are feeling. That response is
        created with retrieval augmented generation that searches through past responses and finds one most similar to
        yours via embedding. The last option, ignore, will cluster all past responses based on embedding similarity as
        elevator buttons you can hover or click on. Throughout the experience, the doorman’s thought bubble serves as a
        window to the inner workings behind the doorman’s generated behavior.
      </>
    ),
    context: (
      <>
        Something notable about living in New York and common across the two apartment buildings I’ve lived in thus far
        are doormen. Since interacting with them, I’ve become increasingly conscious of the question, “how are you?” and
        other similar courtesy greetings. With feelings of being put on the spot, my awareness of “how are you” is the
        inspiration for this project.
        <br />
        <br />
        Specifically, I am interested in the way people respond. Do people respond with more than “I’m good”? Are
        responses acts of acknowledgments, presentations of an artificial front or maintenance of a boundary, or genuine
        snippets of their day? When expressing themselves, is the focus on negatives, positive, unexpected, or salient
        moments?
        <br />
        <br />
        This project is a playful and casual exchange of greetings that appeal to audience members who, like me, are
        curious and even unsure of how to answer such a question.
      </>
    ),
    technical:
      'This project is written in with express in node.js. Responses are reformatted with the llama-2-7b-chat API from Replicate. Retrieval is conducted with the nateraw/bge-large-en-v1.5 model and Transformers.js from Hugging Faces. The primary form of engagement is through mouse and key input. ',
  },
  {
    title: 'gallery',
    tags: ['r3f', 'glsl', 'ui/ux', 'fusion360'],
  cover: ['/gallery/stainedGlass_3.png'],
  description: 'A brief overview of additional projects.',
  }
];

export const ProjectProvider = ({ children }) => {
  // const [activeProject, setActiveProject] = useState(projects[0].title);
  const [activeProject, setActiveProject] = useState(() => {
    const storedProject = localStorage.getItem('activeProject');
    return storedProject || projects[0].title;
  });

  const updateActiveProject = (projectId) => {
    localStorage.setItem('activeProject', projectId);
    setActiveProject(projectId)
  }

  return (
    <ProjectContext.Provider value={{ activeProject, setActiveProject: updateActiveProject, projects }}>
      {children}
      </ProjectContext.Provider>
  );
};
