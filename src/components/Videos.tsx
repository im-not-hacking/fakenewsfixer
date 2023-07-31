import { useState } from 'react'
import './MainScreen.css'
import { videos } from '../constants'

const Gallery = () =>{
    return (
        <div className='grow rounded-[20px] p-[50px] flex'>
        <div className='grow flex flex-col'>
            <div className='w-[100%] '>
                <h1 className="font-bold text-[white] text-[40px]">Video Gallery</h1>
                <div className='w-[100%] h-[5px] bg-[white]'/>
            </div>
            <div className='grow flex p-[3%] gap-[30px] flex-wrap justify-center'>
                {videos.map((item,i) =>(
                    <a key={i} href={item.url} className='w-[20%] h-[50%] flex'>
                        <div className='grow rounded-[20px] flex flex-col border-[white] border-[3px]'>
                            <div style={{backgroundImage: `url(${item.img})`}} className='grow rounded-t-[20px] bg-cover bg-no-repeat bg-center opacity-30 hover:opacity-100'></div>
                            <div className='w-[100%] bg-[white] rounded-b-[10px] justify-center flex'>{item.title}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
    )
}

function Videos() {
    const [moreVideos, setMoreVideos] = useState(1)
  
    return (
        <div className="section noise p-[3%] flex">
            <div className='grow bg-[black] rounded-[20px] flex'>
                {moreVideos ?
                <>
                    <div className='grow basis-0 shrink-0 p-[5%]'>
                        <iframe className="border-4 border-[white] w-[100%] h-[100%] rounded-[20px] p-[10%]" src="https://www.youtube.com/embed/QXOoH4xW5Mc" title="Dr. Jordan - Q1- What is your experience with fake news?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className='grow basis-0 shrink-0 p-[3%] flex gap-[30px]'>
                        <div className='w-[10px] h-[100%] bg-[#f1f1f1]'></div>
                        <div className='grow flex items-center justify-center flex-col p-[20px] gap-[20px]'>
                            <h1 className='text-[white] font-bold text-[30px]'> Interview with an expert</h1>
                            <p className='text-[white] text-[15px]'>Matt Jordan is a critical media scholar who works on the role of media in everyday culture. He is a professor at the Pennsylvania State University and his graduate teaching and research explores how different popular media forms and media technologies are used – and have been used - to constitute and reify aspects of personal identity and cultural ideology.</p>
                            <div onClick={()=>setMoreVideos(0)} className='rounded-[20px] p-[15px] mt-[20px] bg-[white] text-[black] text-[25px] font-bold cursor-pointer'>More videos</div>
                        </div>
                    </div>
                </>
                : 
                <Gallery/>
                }
            </div>
        </div>
      )
  }
  
  export default Videos