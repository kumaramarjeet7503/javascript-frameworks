const reactDescription = ["Fundamental","Core","Crucial"]

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1))
}

function Header(){

  const desc = reactDescription[genRandomInt(2)]

  return (<header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>)
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
