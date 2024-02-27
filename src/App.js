import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import InTheNews from "./components/InTheNews";
import Programmes from "./components/Programmes";

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <InTheNews />
      <Programmes />
    </div>
  );
}

export default App;
