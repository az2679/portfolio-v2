import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { RenderBold } from '../components/renderHTML';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation(['general', 'projects', 'gallery']);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition < viewportHeight * 0.08);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return(
    <div id="home_wrapper" className={isVisible ? 'visible' : 'hidden'}>
      <div className="introBlock intro1">
      <p className="introText">
        <br />
        <RenderBold text={(t('general:homeScholar'))} />
        <br />
        </p>
      </div>
      <div className="introBlock intro2">
      <p className="introText">
      <br />
        <RenderBold text={(t('general:homeCreative'))} />
        <br />
        <br />
        <RenderBold text={(t('general:homeProjects'))} />
      </p>
      </div>

      <div className="introBlock introHobby">
      <p className="hobbyText">
        <br />
        <RenderBold text={(t('general:homeHobbies'))} />
        <br />
        </p>
      </div>
    </div>
  )
}