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
        <div className="w-[100vw] flex z-10">
          <div className="grow h-[70px] bg-[green] flex">
            <div className="flex bg-[red] grow basis-0 shrink-0">
                <h1>PSU Logo</h1>
            </div>
            <div className="flex grow justify-center bg-[blue] basis-0 shrink-0">
                <h1>False News Fixer</h1>
            </div>
            <div className="flex grow justify-end bg-[yellow] basis-0 shrink-0">
                <Button title="Hola" reference="www.google.com"/>
            </div>
          </div>
        </div>
    )
  }
  
  export default Nav
  