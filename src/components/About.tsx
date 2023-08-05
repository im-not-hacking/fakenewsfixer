import { aboutSections } from '../constants'

import './About.css'
import '../index.css'
import { useState } from 'react'
import './Bio.css'


const About = () => {
    const [index,setIndex] = useState(0)

    return (
        <div id="about" className="bg-[#f1f1f1] p-[3%]">
            <div className='w-[100%] h-[95%] flex flex-col'>
                <div className='p-[20px] font-bold text-[30px]'>
                    <h1>{aboutSections[index].title}</h1>
                </div>
                <div className='grow flex justify-end'>
                    <ul className='rounded-[20px] bg-[white] mainShadow grow flex gap-[10px] flex-col p-[20px]'>
                        {aboutSections[index].subsections.map((indexComponent,i)=>(
                            <li key={i} style={{fontSize: aboutSections[index].size}} className='grow items-center text-center'>{indexComponent}</li>
                        ))

                        }
                    </ul>
                </div>
            </div>
            <div className='aboutButtons flex w-[100%] gap-[5%] justify-center mt-[20px]'>
                {aboutSections.map((item,i) => (
                    <div key={i} style={(index == i) ? {background:`red`} : {background: "black"}} className='cursor-pointer rounded-full w-[25px] h-[25px] mt-[10px]' onClick={() => setIndex(i)}/>
                ))}
            </div>
        </div>
    )
}

export default About