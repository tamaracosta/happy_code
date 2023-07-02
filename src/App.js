import './App.css';
import Banner from './components/Banner';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Depoimentos           
        />
      </header>
      <Footer/> 
    </div>
  );
}

export default App;
