import About from "./components/About.jsx";
import Quote from "./components/Quote.jsx";
import Grid from "./components/Grid.jsx";
import Video from "./components/Video.jsx";
import Footer from "./components/Footer.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

function App() {
  return (
    <div className="main-container">
      <About />
      <Grid />
      <Quote />      
      <Video />
      <Footer />
    </div>
  );
}

export default App;
