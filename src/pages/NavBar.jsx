import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';

import LanguageToggle from '../components/LanguageToggle';

export default function NavBar() {
  const [activeTab, setActiveTab] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition < viewportHeight*0.5) {
        setActiveTab('home');
      } else if (scrollPosition < viewportHeight * 1.6){
        setActiveTab('projects');
      } else {
        setActiveTab('about');
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleClick = (tab) => {
    setActiveTab(tab);
    let scrollPosition;
    switch (tab) {
      case 'home':
        scrollPosition = 0;
        break;
      case 'projects':
        scrollPosition = window.innerHeight*1.14;
        break;
      case 'about':
        scrollPosition= window.innerHeight*2.3;
        break;
      default:
        scrollPosition = 0;
    }
    window.scrollTo({
      top: scrollPosition,
      behavior:'smooth'
    })
  }

  return (
    <div id="navBar_wrapper">
      <div id="navHeadContainer">
        <p className="head">athena zhou</p>
        <p className="subhead">{t('general:role')}</p>
      </div>
      <div id="navTabsContainer">
        {['home', 'projects', 'about'].map((tab) => (
          <div key={tab} className={`navItem ${activeTab === tab ? 'active' : ''}`} onClick={() => handleClick(tab)}>
            {t(`general:${tab}`)}
          </div>
        ))}
      </div>
      
      <div id="navContactContainer">
        <div className="navItem navItemContact">NYC,</div>
        <a className="navIcon" href={'mailto:zhouathena@gmail.com'} >
          <ReactSVG style={{height:'100%', width:'100%'}} src={'./icon/email.svg'} />
        </a>
        <a className="navIcon" href={'https://www.linkedin.com/in/athenayzhou'} dis target="_blank" rel="noopener noreferrer">
          <ReactSVG style={{height:'100%', width:'100%'}} src={'./icon/linkedin.svg'} />
        </a>
        <LanguageToggle />
      </div>
    </div>

)}
