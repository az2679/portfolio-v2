import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return(
    <div id="about_wrapper">
      <div className="aboutContainer">
      <div className="imageContainer">
      <img src="./personal/athena.jpg" alt="image of athena zhou" />
        </div>
      <div id="educationContainer">
        <ul style={{ listStyleType: 'circle' }}>
          <li>
            <div className="educationBlock">
              <p className="educationHead">
                <span className="numbers">2022 - 2024</span> {t('nyu')}
              </p>
              <p className="educationSubHead">
              {t('itp')}
              </p>
            </div>
          </li>
          <li>
            <div className="educationBlock">
              <p className="educationHead">
                <span className="numbers">2018 - 2021</span> {t('unc')}
              </p>
              <p className="educationSubHead">
              {t('psyc')}
              </p>
              <p className="educationSubHead">
              {t('phil')}
              </p>
              <p className="educationSubHead">
              {t('ling')}
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
  
      <div id="skillsContainer">
        <div className="skillsBlock">
          <span className="tagHead">{t('coding')}</span>
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
          <span className="tagHead">{t('softwares')}</span>
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

      <div className='divider'></div>
      <div className='introBlock introCode'>
      <p className='codeText'>
        {t('code')}
        </p>
      </div>
    </div>
  )
}
