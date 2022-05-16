
import Intro from "./components/Intro/Intro" ;

import Testimonials from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";
import Topbar from "./components/Topbar/Topbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import './App.css'
function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className='section'>
     <Intro/>
      <Portfolio/> 
     <Testimonials/>
     <Works/>
     <Contact/>
    </div>
    </div>
    
  );
}

export default App;