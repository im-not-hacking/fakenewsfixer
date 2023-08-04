import PopAnimation from './PopAnimation.tsx';
import './PopAnimation.css'
import './MainScreen.css'
import { useState } from 'react';

interface Props  {
  change: (entered:boolean) => void;
}

function MainScreen({change}:Props) {
  const [popScreen, setPopScreen] = useState(0);
  const [isTurnedOff, setIsTurnedOff] = useState(0);
  const [showButton, setShowButton] = useState(1);

  const mainOff = () => {
    //Uncomment to dissapear button when clicked
    //setShowButton(0)
    setPopScreen(1)
    setTimeout(()=>{
      setIsTurnedOff(1);
      setShowButton(0);
      change(true);
    },3000)
  }

    return (
      <>
        <div className='relative grow flex flex-col'>
          {!isTurnedOff ? <PopAnimation showAll={false} /> : ""}
          {(popScreen && !isTurnedOff) ? <PopAnimation showAll={true}/> : ""}
          <section className='grow'>
            <div className="hero-container">
              <div className="environment z-[-1]"></div>
              <h2 className="hero glitch layers font-bold" data-text="False News Fixer"><span>False News Fixer</span></h2>
            </div>
            {/*<button style={{display: `${!showButton ? "none" : "block"}`}} className="absolute font-bold border-[7px] p-[20px] text-[40px] border-[white] text-[white] rounded-[10px] cursor-pointer z-50 top-[420px] left-[200px]" onClick={() =>  mainOff()}>
                Start
    </button>*/}
            <div className='left-[0vw] top-[67vh] absolute w-[100%] justify-center items-center flex'>
              <button className="font-bold border-[4px] p-[10px] text-[20px] border-[white] text-[white] rounded-[10px] cursor-pointer z-50"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='#about';
                  }}
              >
                          Start
              </button>
            </div>
          </section>
        </div>
        <div className={isTurnedOff ? 'bg-[black] absolute w-[100%] h-[100%]' : ''}></div>
      </>
      )
  }
  
  export default MainScreen