import {popUps, colors} from '../constants';
import './PopAnimation.css'

function getRandomInt(max: number){
    return Math.floor(Math.random()*max)
}

type Props = {
  children: string
}

const Bubble = ({children}:Props) => {
  return (
    <div className='bubble blueBubble'><p>{children}</p></div>
  )
}

function PopAnimation() {

    return (
      <div className='absolute rounded-[10px] p-[20px]'>
        {popUps.map((item,i) =>(
            <Bubble key={i}>{item.text}</Bubble>
        ))}
      </div>
      )
  }
  
  export default PopAnimation