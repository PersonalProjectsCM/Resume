export default function Badge({icon, classExtra = ""}: {icon:string; classExtra?:string}) {
    return ( 
    
        <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd" d={icon} clip-rule="evenodd"/>
            </svg>
    )
}