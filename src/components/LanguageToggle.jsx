import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';

import enFlag from '/icon/enFlag.svg';
import jpFlag from '/icon/jpFlag.svg';

export default function LanguageToggle({styleVariant = 'default'}) {
  const { i18n } = useTranslation();

  const currentLang = i18n.language === 'en' ? 'EN' : 'JP';
  const currentFlag = i18n.language === 'en' ? enFlag : jpFlag;

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'jp' : 'en');
  }

  const buttonClass = styleVariant === 'tag' ? 'tagButton' : 'defaultButton'
  const containerClass = styleVariant === 'tag' ? 'tagContainer' : 'defaultContainer'

  return (
    <div className={`langContainer ${containerClass}`}>
      <button className={`langButton ${buttonClass}`} onClick={switchLang}>
        <ReactSVG className="flagIcon" src={currentFlag} /> {currentLang}
      </button>
    </div>
  )
}