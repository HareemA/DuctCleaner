import './App.css';
import Navbar from './Components/NavBar';
import Header from './Components/Header';
import Benifits from './Components/Benifits';
import Services from './Components/Services';
import Tools from './Components/Tools';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import PromotionsPoster from './Components/PromotionsPoster';

export const App = () => {
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
      <h1 className='Tools--heading'>SERVICES</h1>
      <Services/>
      <PromotionsPoster/>
      <Tools/>
      <Benifits/>
      
      <Testimonials/>
      <Footer/>
    </div>
  );
}


