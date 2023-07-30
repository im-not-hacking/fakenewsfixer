import Nav from './components/Nav.tsx';
import MainScreen from './components/MainScreen.tsx';
import About from './components/About.tsx';
import './index.css'
import { useState } from 'react';

function App() {
  let [hasEntered, setHasEntered] = useState(false);
   function handleState(entered:boolean) {
      setHasEntered(entered);
   }

  return (
    <>
      <div className='flex flex-col w-screen h-screen bg-[black]'>
          <Nav/>
          <MainScreen change = {handleState}/>
      </div>
      {hasEntered ? <About/> : ""}
    </>
	)
}

export default App
