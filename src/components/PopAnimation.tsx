import { useEffect, useState } from 'react';
import {sizes,colors, popUps} from '../constants';
import './PopAnimation.css'

function getRandomInt(max: number){
    return Math.floor(Math.random()*max)
}

type Props = {
  size: string,
  color:string,
  position: [number,number],
  children: string,
  animate: boolean
}

type mainProps = {
  showAll: boolean
}

const Bubble = ({size,color,position,children,animate}:Props) => {

  return (
    <div className={`bubble`} style={{top:`${position[0]}px`, left:`${position[1]}px`}}>
      <p className={`${size} ${!animate ? "animation-none" : "animateP"}`} style={{background:`${color}`}}>{children}</p>
      <div style={{background:`${color}`, color:`${color}`}} className={`bubbleAfter ${!animate ? "animation-none" : "animateAfter"}`}>.</div>
    </div>
  )
}

interface messagesProps {
  text: string,
  color: string,
  top: number,
  left: number,
  size:string
  animate: boolean
}

const randomBubbleVals = () => {
  let text = ""
  let color = colors[getRandomInt(colors.length)]
  let top = Math.floor(Math.random()*500)
  let left = Math.floor(Math.random()*900)
  let size = sizes[getRandomInt(sizes.length)]
  let animate = false
  return {text,color,top,left,size, animate} 
}



function PopAnimation({showAll} : mainProps) {

  const [messages, setMessages] = useState<messagesProps[]>([]);

  const mainTimeout = (interval:number) => {
    setTimeout(()=>{
      clearInterval(interval)
    },3000)
  }

  const fillBubbles = () =>{
    const mainBubbleInterval= setInterval(()=>{
      setMessages(messages =>[...messages,randomBubbleVals()])
    },50)
    mainTimeout(mainBubbleInterval)
  }

  const matchPopUps = () =>{
    for (let index = 0; index < popUps.length; index++) {
      let text = popUps[index].text
      let color = popUps[index].color
      let top = popUps[index].top
      let left = popUps[index].left
      let size = popUps[index].size
      let animate = true
      setMessages(messages =>[...messages,{text,color,top,left,size, animate} ])
    }
  }

  useEffect(() => {
    if(showAll){
      fillBubbles();
    }
    else{
      matchPopUps();
    }
  },[]);

    return (
        <div className= "absolute w-[100%] h-[100%]">
          {messages.length
          ? messages.map((item,i) => <Bubble key={i} size={item.size} color={item.color} position={[item.top,item.left]} animate={item.animate}>{item.text}</Bubble>)
          : ''
          }
        </div>
      )
  }
  
  export default PopAnimation