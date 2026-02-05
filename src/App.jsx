import React from 'react';
import Deck from './components/Deck';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
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
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import Slide16 from './components/slides/Slide16';
import Slide17 from './components/slides/Slide17';
import Slide18 from './components/slides/Slide18';

const slides = [
  <Slide1 key="1" />,
  <Slide2 key="2" />,
  <Slide3 key="3" />,
  <Slide4 key="4" />,
  <Slide5 key="5" />,
  <Slide6 key="6" />,
  <Slide7 key="7" />,
  <Slide8 key="8" />,
  <Slide9 key="9" />,
  <Slide10 key="10" />,
  <Slide11 key="11" />,
  <Slide12 key="12" />,
  <Slide13 key="13" />,
  <Slide14 key="14" />,
  <Slide15 key="15" />,
  <Slide16 key="16" />,
  <Slide17 key="17" />,
  <Slide18 key="18" />,
];


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Deck slides={slides} />
    </div>
  );
}

export default App;
