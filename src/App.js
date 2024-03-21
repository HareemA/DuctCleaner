import './App.css';
import Navbar from './Components/NavBar';
import Header from './Components/Header';
import Benifits from './Components/Benifits';
import Services from './Components/Services';
import Tools from './Components/Tools';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Header/>
      <Benifits/>
      <Services/>
      <Tools/>
    </div>
  );
}

export default App;
