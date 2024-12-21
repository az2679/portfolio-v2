import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

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

  const renderBold = (text) => {
    const parts = text.split('<b>').map((part, index) => {
      if (index === 0) return part;
      const [boldText, remaining] = part.split('</b>');
      return (
        <>
          <b>{boldText}</b>
          {remaining}
        </>
      )
    });
    return parts;
  }

  return(
    <div id="home_wrapper" className={isVisible ? 'visible' : 'hidden'}>
      <div className="introBlock intro1">
      <p className="introText">
        <br />
        {renderBold(t('homeScholar'))}
        <br />
        </p>
      </div>
      <div className="introBlock intro2">
      <p className="introText">
      <br />
        {renderBold(t('homeCreative'))}
        <br />
        <br />
        {renderBold(t('homeProjects'))}
      </p>
      </div>

      <div className="introBlock introHobby">
      <p className="hobbyText">
        <br />
        {t('homeHobbies')}
        <br />
        </p>
      </div>
    </div>
  )
}