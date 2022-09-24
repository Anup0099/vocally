import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import SecondBody from './components/SecondBody/SecondBody';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Body/>
    <SecondBody/>
    <Footer/>
    </div>
  );
}

export default App;
