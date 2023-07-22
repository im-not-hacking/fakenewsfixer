import PopAnimation from './PopAnimation.tsx';

function MainScreen() {

    return (
      <div className='grow bg-[black] flex justify-center items-center'>
        <PopAnimation/>
        <h1 className="text-8xl text-[white]">False News Fixer</h1>
      </div>
      )
  }
  
  export default MainScreen