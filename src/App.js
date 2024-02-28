import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import InTheNews from "./components/InTheNews";
import Programmes from "./components/Programmes";
import Campuses from "./components/Campuses";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <InTheNews />
      <Programmes />
      <Campuses />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
