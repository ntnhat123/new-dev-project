
import './App.css';
import { Router, Route,BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner';
import Slider from './Components/Slider';
import Project from './Components/Project';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Banner/>
        <Slider/>
        <Project/>
        <Contact/>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
