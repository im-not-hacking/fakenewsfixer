import {popUps} from '../constants';
import './PopAnimation.css'

/*function getRandomInt(max: number){
    return Math.floor(Math.random()*max)
}*/

type Props = {
  size: string,
  color:string,
  position: [number,number],
  children: string
}

const Bubble = ({size,color,position,children}:Props) => {

  return (
    <div className={`bubble`} style={{top:`${position[0]}px`, left:`${position[1]}px`}}>
      <p className={`${size}`} style={{background:`${color}`}}>{children}</p>
      <div style={{background:`${color}`, color:`${color}`}} className={`bubbleAfter`}>.</div>
    </div>
  )
}

function PopAnimation() {

    return (
      <div className='absolute rounded-[10px] p-[0px] w-[100vw] h-[100vh]'>
        {popUps.map((item,i) =>(
            <Bubble key={i} size={item.size} color={item.color} position={[item.top,item.left]}>{item.text}</Bubble>
        ))}
      </div>
      )
  }
  
  export default PopAnimation