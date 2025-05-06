export default function Input({label,textarea,type,className,...props}){
    return <p>
        <label className="block text-sm font-semibold uppercase my-1">{label}</label>
        { textarea ? <textarea className={`bg-gray-300 border-t-0 p-1  ${className}` }  {...props}  ></textarea>  :
            <input type={type} className={`bg-gray-300 border-t-0 p-1  mb-2 ${className}`} {...props} ></input> }
    </p>
} 