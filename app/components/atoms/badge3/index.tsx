export default function Badge({icon, classExtra = ""}: {icon:string; classExtra?:string}) {
    return ( 
    
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="8em" viewBox="0 0 16 16">
            <path fill="currentColor" d={icon}/></svg>
    )
}