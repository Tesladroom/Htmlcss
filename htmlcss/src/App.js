import './App.css';
import './Pages/Kontakt';
import { Link, Route, Router, Routes } from 'react-router-dom';
import './Pages/Meist';
import './Pages/Avaleht';
import Kontakt from './Pages/Kontakt';
import Avaleht from './Pages/Avaleht';
import Meist from './Pages/Meist';


function App() {
  return (
    <div className="App">

<div>
      <button className='nupp'>Roheline nupp</button>
      </div>
      
     <p className='bluetext'>Sinine tekst</p>

<div>
  <Link to="/">
    <button className='nupp1'>Avaleht</button>
  </Link>
  <Link to="/Kontakt">
    <button className='nupp1'>Kontakt</button>
  </Link>
  <Link to="/Meist">
    <button className='nupp1'>Meist</button>
  </Link>
</div>
<Routes>
<Route path='/' exact element={ <Avaleht /> } />
<Route path='Kontakt' exact element={ <Kontakt /> } />
<Route path='Meist' exact element={ <Meist /> } />
</Routes>





     
    </div>
  );
}

export default App;
