import psu from "../assets/psuLogo.png"
import { navButtons } from "../constants";

interface ButtonProps {
    reference: string;
    children: string
}

let Button = ({reference,children}:ButtonProps) => {
    
    return (
        <a href={reference}>
            <div className=" hidden sm:block p-[10px] bg-[white] rounded-[15px]">
                <p className="font-bold">{children}</p>
            </div>
        </a>
    )
}


let Nav = () => {

    return (
        <div className="w-[100vw] flex z-10 h-[100px]">
          <div className="grow flex">
            <div className="flex grow basis-0 shrink-0 ml-[5vw]">
                <img style={{width:'auto', height:'100%'}} src={psu}/>
            </div>
            <div className="flex grow justify-end items-center gap-[30px] basis-0 shrink-0 mr-[30px]">
                {navButtons.map((item,i) =>(
                    <Button key={i} reference={item.reference}>{item.name}</Button>
                ))}
            </div>
          </div>
        </div>
    )
  }
  
  export default Nav
  