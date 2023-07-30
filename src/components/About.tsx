import { navButtons } from "../constants"
import './About.css'

const MainPanel = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[150px] h-[100%]">
            {navButtons.map((item,i) =>(
                <div key={i} className="grow flex justify-left items-center">
                    <div className="flex rounded-full justify-center items-center w-[60px] h-[60px] bg-[white]"/>
                </div>
            ))}
        </div>
    )
}

const MainSection = () =>{
    return (
        <>
            <div className="relative grow bg-[red] rounded-[30px] floating"/>
            <div className="absolute border-[20px] border-[black] w-[98%] h-[100%] bg-[white] rounded-[50px] rotate-[-3deg] mt-[4%] ml-[15%]"/>
        </>
    )
}

const About = () => {
    return (
        <div className="bg-[black] w-[100vw] h-[100vh] p-[5%]">
            <div className="relative w-[100%] h-[100%] flex ">
                <MainPanel/>
                <MainSection/>
            </div>
        </div>
    )
}

export default About