export function CoreConcept({image,description,title}){
    return (<li>
      <img src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>)
}
