import { aboutSections } from '../constants'

import './About.css'
import '../index.css'
import { useState } from 'react'


const About = () => {
    const [index,setIndex] = useState(0)

    return (
        <div id="about" className="bg-[#f1f1f1] p-[3%]">
            <div className='w-[100%] h-[95%] flex flex-col'>
                <div className='p-[20px] font-bold text-[30px]'>
                    <h1>{aboutSections[index].title}</h1>
                </div>
                <div className='grow bg-[black] pl-[20px] rounded-[20px] flex pt-[3%] justify-end'>
                    <ul style={{background: `#f1f1f1`}} className='grow flex gap-[5%] flex-col p-[20px] bg-[green]'>
                        {aboutSections[index].subsections.map((indexComponent,i)=>(
                            <li key={i} style={{fontSize: aboutSections[index].size}} className='max-h-[85%] p-[5px] grow w-[95%] bg-[#f1f1f1] rounded-[20px] items-center'>{indexComponent}</li>
                        ))

                        }
                    </ul>
                </div>
            </div>
            <div className='aboutButtons flex w-[100%] gap-[5%] justify-center mt-[20px]'>
                {aboutSections.map((item,i) => (
                    <div key={i} style={(index == i) ? {background:`${item.color}`} : {background: "black"}} className='cursor-pointer rounded-full w-[30px] h-[30px]' onClick={() => setIndex(i)}/>
                ))}
            </div>
        </div>
    )
}

export default About