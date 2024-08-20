import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

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
        A scholar to the core, my boundless curiosity for understanding the intricacies of <b>human behavior</b>{' '}
        has been constant throughout all stages of my life.
        <br />
        </p>
      </div>
      <div className="introBlock intro2">
      <p className="introText">
      <br />
        Currently, it has led me to become a creative technologist that uses digital interactivity to explore
        <b> motivation and decision making</b>. 
        <br />
        <br />
        My latest projects have been centered on <b>communication of beliefs</b>.
      </p>
      </div>

      <div className="introBlock introHobby">
      <p className="hobbyText">
        <br />
        You can also find me exploring various art forms (currently, wheel throwing), indulging my pup with back scratches, or connecting with my siblings virtually over game nights. 
        <br />
        </p>
      </div>
    </div>
  )
}