import Nav from './components/Nav.tsx';
import MainScreen from './components/MainScreen.tsx';

function App() {

  return (
    <div className='flex flex-col w-screen h-screen bg-[green]'>
      	<Nav/>
        <MainScreen/>
    </div>
	)
}

export default App
