import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="easy" targetTime={1}></TimeChallenge>
        <TimeChallenge title="not easy" targetTime={5}></TimeChallenge>
        <TimeChallenge title="getting tough" targetTime={10}></TimeChallenge>
        <TimeChallenge title="Pro" targetTime={15}></TimeChallenge>
      </div>
    </>
  );
}

export default App;
