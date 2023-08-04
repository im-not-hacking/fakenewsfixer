import './Bio.css'

const Bio = () => {

    return (
        <div className="min-h-[400px] p-[20px] sm:p-[60px] flex bg-[#e2e1e0] flex-col">
            <div className='w-[100%] h-[100px] mb-[20px] items-center justify-left flex p-[3%]'>
                <h1 className='text-[30px] font-bold'>About me</h1>
            </div>
            <div className="w-[100%] flex gap-[50px] md:gap-[100px] flex-wrap md:flex-nowrap">
                <div className="w-[100%] min-w-[250px] relative flex justify-center items-center">
                    <div className="inline-block relative shadow h-[300px] w-[250px] min-w-[250px] bg-[black] rounded-[20px]"></div>
                </div>
                <div className="grow flex  p-[5%] bg-[#fff] mainShadow rounded-[20px]">
                    <div className="w-[100%] justify-center items-center flex flex-col gap-[20px]" >
                        <h1 className='text-[20px] font-bold'>Carolina Tzemos</h1>
                        <h1 className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Bio