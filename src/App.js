import './App.css';
import Navbar from './Components/NavBar';
import Header from './Components/Header';
import Benifits from './Components/Benifits';
import Services from './Components/Services';
import Tools from './Components/Tools';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import {Reveal} from './animation/Reveal';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <div className="contact--banner--container">
            <h1 className="contact--banner--heading">GTA DUCT CLEANING 
                <div className="roller">
                    <span id="rolltext">YOUR<br/>
                    TRUSTED<br/>
                    HOME<br/>
                    CLEANERS<br/>
                    </span>
                </div>
            </h1>
        </div>
      <Header/>
      <h1 className="servives-heading">OUR SERVICES</h1>
      <Services/>
      <Benifits/>
      
      <Tools/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
