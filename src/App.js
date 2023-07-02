import './App.css';

import Banner from './components/Banner';
import Depoimentos from './components/Depoimentos';
import Confetti from './components/Confetti/confetti';
import ConfettiCDN from './components/Confetti/ConfettiCDN';


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <Confetti />
        <ConfettiCDN />
        <Banner />
        <Depoimentos />
       
      </header> 
      
    </div>
    
  );
}

export default App;
