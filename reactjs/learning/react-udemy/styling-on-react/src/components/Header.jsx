import logo from '../assets/logo.png';
import {styled} from 'styled-components'
styled.p`color: red`

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 style={{
        color:'black',fontStyle:'italic'
      }} >ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
