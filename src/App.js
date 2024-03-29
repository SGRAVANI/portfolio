import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Particle from './Components/Particle';
import Portfolio1 from './Components/Portfolio/Portfolio1';
import GitContribution from './Components/GitContrubution/GitContribution';
import Training from './Components/Training/Training';

function App() {
  return (
    <div className="App">
    
      <Particle />
     
   <Nav/> 
   <About/>
   <Experience/>
   <Training/>
   <Services/>
   
   <Portfolio1/>
   
   <Contact/>
   <Footer/>
   {/* <GitContribution/> */}
    </div>
  );
}

export default App;
