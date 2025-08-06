import logoImg from '../assets/quiz-logo.png';


export default function Header({children}){
    return <header >
        <img src={logoImg} />
        <h1>{children}</h1>
    </header>
}