export default function Button({children,className,...props}){
    return <button {...props} className={`p-1 pb-1.5 px-4 rounded mt-2 font-normal ml-auto ${className}`} >{children}</button>
}