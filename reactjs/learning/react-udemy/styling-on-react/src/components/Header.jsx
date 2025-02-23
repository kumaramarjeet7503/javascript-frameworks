import logo from '../assets/logo.png';
import {styled} from 'styled-components'



const RedPara = styled.p`
color: ${({invalid}) => invalid ? 'red': 'black'}
`

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 style={{
        color:'black',fontStyle:'italic'
      }} >ReactArt</h1>
      <RedPara  invalid={true}>A community of artists and art-lovers.</RedPara>
    </header>
  );
}
