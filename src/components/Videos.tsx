import { useState } from 'react'
import './MainScreen.css'
import './Bio.css'
import { videos } from '../constants'

function Videos() {
    const [moreVideos, setMoreVideos] = useState(1)
  
    return (
        <div id="videos" className="noise p-[3%] flex">
            <div className='grow bg-[black] rounded-[20px] flex flex-wrap'>
                {moreVideos ?
                <>
                    <div className='min-w-[300px] grow basis-0 shrink-0 p-[5%]'>
                        <iframe className="border-4 border-[white] w-[100%] rounded-[20px] p-[10%]" src="https://www.youtube.com/embed/QXOoH4xW5Mc" title="Dr. Jordan - Q1- What is your experience with fake news?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className='grow basis-0 shrink-0 p-[3%] flex gap-[30px]'>
                        <div className='hidden sm:block w-[10px] h-[100%] bg-[#f1f1f1]'></div>
                        <div className='grow flex items-center justify-center flex-col p-[20px] gap-[20px]'>
                            <h1 className='text-[white] font-bold text-[30px]'> Interview with an expert</h1>
                            <p className='text-[white] text-[15px]'>Dr. Matt Jordan is a critical media scholar who works on the role of media in everyday culture. He is a professor at the Pennsylvania State University and his graduate teaching and research explores how different popular media forms and media technologies are used – and have been used - to constitute and reify aspects of personal identity and cultural ideology.</p>
                            <div onClick={()=>setMoreVideos(0)} className='rounded-[20px] p-[15px] mt-[20px] bg-[white] text-[black] text-[25px] font-bold cursor-pointer'>More videos</div>
                        </div>
                    </div>
                </>
                : 
                <div className='grow rounded-[20px] p-[50px] flex'>
        <div className='grow flex flex-col'>
            <div className='w-[100%] mb-[20px]'>
                <div className='flex flex-row items-center'>
                    <div onClick={()=>setMoreVideos(1)} className='arrowLeft mr-[20px] ml-[20px] cursor-pointer '></div>
                    <h1 className="font-bold text-[white] text-[30px]">Video Gallery</h1>
                </div>
                <div className='w-[100%] h-[3px] bg-[white]'/>
            </div>
            <div className='grow flex pt-[20px] p-[3%] gap-[30px] flex-wrap justify-center'>
                {videos.map((item,i) =>(
                    <a key={i} href={item.url} className='min-w-[200px] w-[20%] flex'>
                        <div className='w-[100%] sm:h-[200px] rounded-[20px] flex flex-col sm:border-solid border-none border-[white] border-[3px]'>
                            <div style={{backgroundImage: `url(${item.img})`}} className='hidden sm:block grow rounded-t-[20px] bg-cover bg-no-repeat bg-center opacity-30 hover:opacity-100'></div>
                            <div className='w-[100%] bg-[white] sm:rounded-b-[10px] justify-center flex'>{item.title}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
                }
            </div>
        </div>
      )
  }
  
  export default Videos