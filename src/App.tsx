import Nav from './components/Nav.tsx';
import MainScreen from './components/MainScreen.tsx';
import About from './components/About.tsx';
import Videos from './components/Videos.tsx';
import Quiz from './components/Quiz.tsx';
import Footer from './components/Footer.tsx';
import Bio from './components/Bio.tsx';
import './index.css'
//import { useState } from 'react';

function App() {
  const hasEntered = true;
  /*let [hasEntered, setHasEntered] = useState(true);
   function handleState(entered:boolean) {
      setHasEntered(entered);
   }*/

  return (
    <>
      <div className='flex flex-col w-screen h-screen bg-[black]'>
          <Nav/>
          <MainScreen/>
      </div>
      {hasEntered ? <About/> : ""}
      {hasEntered ? <Videos/> : ""}
      {hasEntered ? <Quiz/> : ""}
      {hasEntered ? <Bio/> : ""}
      {hasEntered ? <Footer/> : ""}
    </>
	)
}

export default App
