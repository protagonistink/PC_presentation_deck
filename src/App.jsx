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
import Slide22 from './components/slides/Slide22';
import Slide23 from './components/slides/Slide23';
import Slide24 from './components/slides/Slide24';
import Slide25 from './components/slides/Slide25';
import Slide26 from './components/slides/Slide26';
import Slide27 from './components/slides/Slide27';
import Slide28 from './components/slides/Slide28';
import Slide29 from './components/slides/Slide29';

const slides = [
  <Slide1 key="1" />,   // Title Slide
  <Slide4 key="4" />,   // About PI
  <Slide3 key="3" />,   // Team (Amy/Pat)
  <Slide22 key="22" />, // Why Storytelling? (Health Diagram)
  <Slide23 key="23" />, // Agenda / Outline
  <Slide18 key="18" />, // Act 1 Intro
  <Slide13 key="13" />, // Once upon a time... (Pacific Crest)
  <Slide5 key="5" />,   // What is Story?
  <Slide6 key="6" />,   // Story is Transformation
  <Slide7 key="7" />,   // Narrative Arc
  <Slide10 key="10" />, // Brands sell beliefs
  <Slide24 key="24" />, // Nike Logo (No Text)
  <Slide11 key="11" />, // Nike Case Study
  <Slide12 key="12" />, // Habitat Case Study
  <Slide25 key="25" />, // Pacific Crest Case Study Intro
  <Slide19 key="19" />, // Act 2 Intro
  <Slide26 key="26" />, // Joseph Campbell (1949)
  <Slide27 key="27" />, // Elements of Story
  <Slide9 key="9" />,   // Major Characters (Examples)
  <Slide8 key="8" />,   // Hero's Journey (Custom Viz)
  <Slide28 key="28" />, // Protagonist's Journey Worksheet
  <Slide20 key="20" />, // Act 3 Intro
  <Slide29 key="29" />, // Identity / Mistakes (Red X)
  <Slide21 key="21" />, // Major Characters Discussion
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
