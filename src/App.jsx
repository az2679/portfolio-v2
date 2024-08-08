import "./App.css";

import { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import useScrollProgress from "./components/useScrollProgress";
import { AnimationTimeline } from "./AnimationTimeline";
import { ProjectProvider } from './context/ProjectContext';
import { GalleryProvider } from './context/GalleryContext';

import NavBar from './pages/NavBar';
import Home from './Pages/Home';
import Project from './pages/Project';
import About from './Pages/About';
import CaseStudy from './pages/CaseStudy';
import Gallery from './pages/Gallery';



const MainPage = () => {
  return(
  <div id="site_wrapper">
    <NavBar />
    <div id="threed_wrapper">
      <Home />
      <Suspense fallback={
        <>
        <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center'}}>Loading...</div>
        <div style={{marginLeft: '-20vw', height:'200vh', display:'flex', justifyContent:'center'}}>Loading...</div>
        </>
        }>
        <Project />
      </Suspense>
    </div>
    <div id="filler_wrapper" />
    <About />
    </div>
  )
}

function App() {
  const progress = useScrollProgress();

  useEffect(() => {
    AnimationTimeline.progress(progress);
  }, [progress]);

  return (
    <Router>
    <ProjectProvider>
    <GalleryProvider>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
    </GalleryProvider>
    </ProjectProvider>
    </Router>
  );
}

export default App;
