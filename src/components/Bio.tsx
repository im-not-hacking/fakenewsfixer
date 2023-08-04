import './Bio.css'
import { bio } from '../constants'
import { useState } from 'react'
import linkedin from '../assets/linkedin.png'

const Bio = () => {
    const [pageNum, setPageNum] = useState(0)

    const checkContent = () => {
        if (!pageNum) {
            return bio[0]
        }
        else{
            return bio[1] +"\n \n"+ bio[2]
        }
    }

    const changePageNum = () => {
        if (!pageNum) {
            setPageNum(1)
        }
        else{
            setPageNum(0)
        }
    }

    return (
        <div id="aboutme" className="min-h-[400px] p-[20px] sm:p-[60px] flex bg-[#e2e1e0] flex-col">
            <div className='w-[100%] h-[100px] mb-[20px] items-center justify-left flex p-[3%]'>
                <h1 className='text-[30px] font-bold'>About me</h1>
            </div>
            <div className="w-[100%] flex gap-[50px] md:gap-[100px] flex-wrap md:flex-nowrap">
                <div className="relative w-[100%] min-w-[250px] relative flex justify-center items-center">
                    <div className="inline-block relative shadow h-[300px] w-[250px] min-w-[250px] bg-[black] rounded-[20px]"></div>
                    <div className='absolute bg-[#0072b1] w-[80px] h-[80px] left-0 bottom-0 rounded-full flex justify-center items-center p-[2%]'>
                        <a style={{backgroundImage: `url(${linkedin})`}} href="https://www.linkedin.com/in/carolina-tzemos/" className='bg-contain bg-no-repeat bg-center grow h-[100%] rounded-full'></a>
                    </div>
                </div>
                <div className="relative grow flex  p-[5%] bg-[#fff] mainShadow rounded-[20px]">
                    <div className="w-[100%] justify-center items-center flex flex-col gap-[20px]" >
                        <h1 className='text-[20px] font-bold'>Carolina Tzemos</h1>
                        <h1 className="text-[20px]" style={{whiteSpace: "pre-line"}}>
                            {checkContent()}
                        </h1>
                    </div>
                    <div className='absolute right-[-10px] flex gap-[20px] justify-end bottom-[-20px]'>
                        <div className={`cursor-pointer ${!pageNum ? 'arrowRight': 'arrowLeft'} w-[50px] h-[50px] rounded-full bg-[black] flex justify-center items-center`} onClick={() => changePageNum()}></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Bio