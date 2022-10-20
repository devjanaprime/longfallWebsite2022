import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Body from '../Body/Body';
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
