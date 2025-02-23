export default function InputGroup({label, id,...attr}){
    return <p>
    <label htmlFor={id} >{label}</label>
    <input id={id} type="number" {...attr}></input>
  </p>
}