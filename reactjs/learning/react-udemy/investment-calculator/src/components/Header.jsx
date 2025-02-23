import headerImg from '/src/assets/investment-calculator-logo.png'

export default function Header({children}){
    return (
        <header id='header' >
        <img  src={headerImg}  />
        <h1>{children} </h1>
        
      </header>
      )
}