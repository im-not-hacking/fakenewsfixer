import psu from "../assets/psuLogo.png"

interface ButtonProps {
    title: string;
    reference: string;
}

let Button = (props:ButtonProps) => {
    
    return (
        <a href={props.reference}>
            {props.title}
        </a>
    )
}

let Nav = () => {

    return (
        <div className="w-[100vw] flex z-10 ">
          <div className="grow h-[100px] flex">
            <div className="flex grow basis-0 shrink-0 ml-[50px]">
                <img style={{height:'120px'}} className="" src={psu}/>
            </div>
            <div className="flex grow justify-center items-center basis-0 shrink-0">
                <h1 className="text-[white] align-baseline font-bold">False News Fixer</h1>
            </div>
            <div className="flex grow justify-end basis-0 shrink-0">
                <Button title="Hola" reference="www.google.com"/>
            </div>
          </div>
        </div>
    )
  }
  
  export default Nav
  