 import psu from '../assets/psuLogo.png'
 
 function Footer() {
    return (
        <div className="w-[100vw] h-[35vh] bg-[black] p-[5%] flex flex-wrap">
            <div style={{backgroundImage: `url(${psu})`}} className="min-w-[300px] grow basis-0 shrink-0 bg-contain bg-no-repeat bg-center"></div>
            <div className="min-w-[300px] grow basis-0 shrink-0 flex flex-col flex-nowrap items-center justify-center">
                <h1 className='text-[white]'>201 Old Main State College, PA 16801</h1>
                <h1 className='text-[white]'>cts5387@psu.edu</h1>
                <h1 className='text-[white]'>+1 (555) 902-8832</h1>
            </div>
        </div>
    )
 }
 export default Footer