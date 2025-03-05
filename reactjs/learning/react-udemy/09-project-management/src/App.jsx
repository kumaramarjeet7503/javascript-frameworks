import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {



  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="content" className="flex">
        <SideBar />
        < Main />
      </section>
    </>
  );
}

export default App;
