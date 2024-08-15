export default function About() {
  return(
    <div id="about_wrapper">
      <div>
      <div className="imageContainer">
      <img src="./personal/athena.jpg" alt="image of athena zhou" />
        </div>
      <div id="educationContainer">
        <ul style={{ listStyleType: 'circle' }}>
          <li>
            <div className="educationBlock">
              <p className="educationHead">
                <span className="numbers">2022 - 2024</span> NYU Tisch
              </p>
              <p className="educationSubHead">
                Interactive Telecommunication MPS
              </p>
            </div>
          </li>
          <li>
            <div className="educationBlock">
              <p className="educationHead">
                <span className="numbers">2018 - 2021</span> UNC-CH
              </p>
              <p className="educationSubHead">
                Psychology BS
              </p>
              <p className="educationSubHead">
                Philosphy BA
              </p>
              <p className="educationSubHead">
                Linguistics Minor
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
  
      <div id="skillsContainer">
        <div className="skillsBlock">
          <span className="tagHead">coding</span>
          <br />
          <span className="tag">html</span>
          <span className="tag">css</span>
          <span className="tag">javascript</span>
          <br />
          <span className="tag">react.js</span>
          <span className="tag">next.js</span>
          <span className="tag">three.js</span>
          <br />
          <span className="tag">react three fiber</span>
          <span className="tag">react three rapier</span>
          <br />
          <span className="tag">gsap</span>
          <span className="tag">webgl</span>
          <span className="tag">glsl</span>
          <span className="tag">ml5.js</span>
          <br />
          <span className="tag">node.js</span>
          <span className="tag">express</span>
          <br />
          <span className="tag">python</span>
          <span className="tag">sql</span>
          <span className="tag">r</span>
        </div>
        <div className="skillsBlock">
          <span className="tagHead">softwares</span>
          <br />
          <span className="tag">fusion 360</span>
          <span className="tag">blender</span>
          <span className="tag">physical computing</span>
          <span className="tag">unreal engine</span>
          <br />
          <span className="tag">photoshop</span>
          <span className="tag">illustrator</span>
          <span className="tag">premiere pro</span>
          <span className="tag">aero</span>
          <br />
          <span className="tag">github</span>
          <span className="tag">jira</span>
          <span className="tag">figma</span>
          <br />
          <span className="tag">zotero</span>
          <span className="tag">qualtrics</span>
          <span className="tag">spss</span>
        </div>
      </div>

      <div style={{position:'absolute', border:'2px solid #91908e', height:'0vh', width:'15vw',top:'85vh', left:'42vw',borderRadius:'2px'}}></div>
      <div className='introBlock' style={{top:'87vh', left:'5.5vw', width:'90vw'}}>
      <p style={{fontSize:'1.1vw', fontFamily:'Roboto, monospace'}}>
        Designed in Figma and developed by me using Visual Studio Code. Built with React Three Fiber, animated with Framer Motion and Greensock Animation Platform. Routed with React Router and deployed via GitHub Pages. Typography includes the Roboto and Roboto Mono typefaces.
        </p>
      </div>
    </div>
  )
}
