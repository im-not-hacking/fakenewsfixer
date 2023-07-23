import PopAnimation from './PopAnimation.tsx';
import './PopAnimation.css'

function MainScreen() {

    return (
      <div className='grow bg-[black] flex justify-center items-center'>
        <PopAnimation/>
        <section>
        <div className="hero-container">
          <div className="environment"></div>
          <h2 className="hero glitch layers font-bold" data-text="False News Fixer"><span>False News Fixer</span></h2>
        </div>
      </section>
      </div>
      )
  }
  
  export default MainScreen