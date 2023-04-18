
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container-fluid">
        < Catalog />
      </div> 

    
      <Footer />
    </div>
  );
}

export default App;
