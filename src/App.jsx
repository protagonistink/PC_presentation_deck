import React from 'react';
import Deck from './components/Deck';
import Slide1 from './components/slides/Slide1';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide15 from './components/slides/Slide15';
import Slide16 from './components/slides/Slide16';
import Slide17 from './components/slides/Slide17';
import Slide18 from './components/slides/Slide18';
import Slide19 from './components/slides/Slide19';
import Slide20 from './components/slides/Slide20';
import Slide21 from './components/slides/Slide21';

const slides = [
  <Slide1 key="1" />,   // Title slide
  <Slide4 key="4" />,   // About PI
  <Slide3 key="3" />,   // Team
  <Slide18 key="18" />, // Act 1 Intro
  <Slide13 key="13" />, // Once upon a time
  <Slide5 key="5" />,   // What is Story
  <Slide6 key="6" />,   // Story is Transformation
  <Slide7 key="7" />,   // Narrative Arc
  <Slide10 key="10" />, // Brands sell beliefs
  <Slide11 key="11" />, // Nike
  <Slide12 key="12" />, // Habitat
  <Slide9 key="9" />,   // Major Characters
  <Slide21 key="21" />, // Character Discussion
  <Slide19 key="19" />, // Act 2 Intro
  <Slide8 key="8" />,   // Hero's Journey
  <Slide20 key="20" />, // Act 3 Intro
  <Slide15 key="15" />, // Summary
  <Slide16 key="16" />, // CTA
  <Slide17 key="17" />, // End
];

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Deck slides={slides} />
    </div>
  );
}

export default App;
